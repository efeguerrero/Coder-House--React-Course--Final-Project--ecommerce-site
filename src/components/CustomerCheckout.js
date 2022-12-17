import React, { useRef } from 'react';

//Context Imports
import { useCartContext } from '../context/CartContex';

//FireStore Imports
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from 'firebase/firestore';

const CustomerCheckout = () => {
  //Cart Context imports
  const { cart, cartTotal, clearCart } = useCartContext();

  //ref definitions for uncontrolled inputs to obtain value from Form inputs to later construct order
  const refName = useRef();
  const refSurname = useRef();
  const refEmail = useRef();
  const refPhone = useRef();
  const refAddress = useRef();

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

    addDoc(ordersCollection, order)
      .then(({ id }) => console.log(id))
      .catch((err) => console.error({ err }));
  };

  return (
    <section className="sectionCenter">
      <form action="" className="checkoutForm" onSubmit={handleSubmitCheckout}>
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
