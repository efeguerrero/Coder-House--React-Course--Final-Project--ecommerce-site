import React, { useRef, useState, useEffect } from 'react';

//Context Imports
import { useCartContext } from '../context/CartContex';

//FireStore Imports
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from 'firebase/firestore';

const CustomerCheckout = () => {
  const [orderId, setOrderId] = useState(null);
  const [orderPosted, setOrderPosted] = useState(false);

  //Cart Context imports
  const { cart, cartTotal, clearCart } = useCartContext();

  //ref definitions for uncontrolled inputs to obtain value from Form inputs to later construct order
  const refName = useRef();
  const refSurname = useRef();
  const refEmail = useRef();
  const refPhone = useRef();
  const refAddress = useRef();

  //Function to handle order final submit

  const handleSubmitCheckout = (e) => {
    e.preventDefault();

    //Map over cart to only post order with significant information from products
    const orderItems = cart.map((item) => {
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      };
    });

    //Order Object construction to later be added to Order Collection in Firebase
    const order = {
      buyer: {
        name: refName.current.value,
        surname: refSurname.current.value,
        email: refEmail.current.value,
        phone: refPhone.current.value,
        address: refAddress.current.value,
      },
      items: orderItems,
      date: new Date().toString(),
      total: cartTotal(),
    };

    //Firebase Add Order to Database after submitting

    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');

    //If promise is succesfull we store our ID to later show to user, and set our OrderPosted status to true, to re render and show our final message to customer. We also clear cart

    addDoc(ordersCollection, order)
      .then(({ id }) => {
        setOrderId(id);
        clearCart();
        setOrderPosted(true);
      })
      .catch((err) => console.error({ err }));
  };

  //Only update firebase db stock for products AFTER our ourder has been posted to avoid false stock. We use useEffect triggered by orderPosted state to ensure that we only run this after our order posting was succesfull

  useEffect(() => {
    if (orderPosted) {
      const db = getFirestore();

      // for each item in cart we get our current stock from firebase and then update that stock substracting the quantity in our cart for that id
      cart.forEach((item) => {
        //create reference for each item in cart to use in getDoc and updateDoc
        const itemRef = doc(db, 'items', item.id);
        getDoc(itemRef)
          .then((result) => result.data().stock)
          .then((originalStock) =>
            updateDoc(itemRef, { stock: originalStock - item.quantity })
          )
          .catch((err) => console.error(err));
      });
    }
  }, [orderPosted]);

  if (orderPosted) {
    return (
      <section className="sectionCenter">
        <h2 className="checkoutOrderTitle">¡Gracias por su compra!</h2>
        <h3 className="checkoutOrderId">Numero de Orden: {orderId}</h3>
      </section>
    );
  }

  return (
    <section className="sectionCenter">
      <form action="" className="checkoutForm" onSubmit={handleSubmitCheckout}>
        <h2 className="checkoutFormAmount">
          El monto total de su compra es de: $
          {cartTotal().toLocaleString('es-AR')}
        </h2>
        <input
          type="text"
          name="name"
          className="checkoutInput"
          placeholder="nombre"
          required
          ref={refName}
        />
        <input
          type="text"
          name="surname"
          className="checkoutInput"
          placeholder="apellido"
          required
          ref={refSurname}
        />
        <input
          type="email"
          name="email"
          className="checkoutInput"
          placeholder="email@example.com"
          required
          ref={refEmail}
        />
        <input
          type="tel"
          name="phone"
          className="checkoutInput"
          placeholder="Telefono de Contacto"
          required
          ref={refPhone}
        />
        <input
          type="text"
          name="address"
          className="checkoutInput"
          placeholder="Dirección"
          required
          ref={refAddress}
        />
        <button type="submit" className="formSubmit">
          Confirmar Compra
        </button>
      </form>
    </section>
  );
};

export default CustomerCheckout;
