import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();
//Context custom hook
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  //Context State
  const [cart, setCart] = useState([]);

  //Context Functiosna & Logic
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

  const cartTotal = () => {
    const total = cart.reduce((acc, currItem) => {
      acc += currItem.quantity * currItem.price;
      return acc;
    }, 0);
    return total;
  };

  const isCartEmpty = () => {
    return Boolean(cart.length === 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isInCart,
        cartTotal,
        isCartEmpty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
