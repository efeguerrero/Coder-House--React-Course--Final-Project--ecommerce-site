import React from 'react';

//Context Imports
import { useCartContext } from '../context/CartContex';

const CartSummary = () => {
  const { cartTotal } = useCartContext();

  const costoEnvio = 300;

  return (
    <>
      <div className="cartSummary">
        <h2 className="cartSummaryTitle">Resumen de Orden</h2>
        <div className="cartSummaryInfo">
          <h3 className="cartSummarySubtitle">SubTotal</h3>
          <h3 className="cartSummaryAmount">${cartTotal()}</h3>
        </div>
        <div className="cartSummaryInfo">
          <h3 className="cartSummarySubtitle">Costo de Envio</h3>
          <h3 className="cartSummaryAmount">${costoEnvio}</h3>
        </div>
        <div className="cartSummaryInfo cartSummaryTotal">
          <h3 className="cartSummarySubtitle">Total</h3>
          <h3 className="cartSummaryAmount">${cartTotal() + costoEnvio}</h3>
        </div>
        <button className="checkoutBtn">Finalizar Compra</button>
      </div>
    </>
  );
};

export default CartSummary;
