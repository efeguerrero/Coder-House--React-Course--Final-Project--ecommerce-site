import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();
//Context custom hook
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  //Context State
  const [cart, setCart] = useState([]);

  const addItem = (id, name, price, img_src, count) => {
    //If item is in cart we map over Array and update quantity of item that was updated, leaving the rest as they were. If not in cart then we added it to the end of the array
    if (isInCart(id)) {
      const updatedCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + count };
        } else {
          return item;
        }
      });
      setCart(updatedCart);
    } else {
      console.log('not in cart so adding');
      const newItem = { id, name, quantity: count, price, img_src };
      setCart([...cart, newItem]);
    }
  };

  const removeItem = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return Boolean(cart.find((item) => item.id === id));
    //short version to avoid if --> true, else--->false
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
