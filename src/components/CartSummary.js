import React from 'react';

//Context Imports
import { useCartContext } from '../context/CartContex';

//React-router-dom Imports
import { Link } from 'react-router-dom';

const CartSummary = () => {
  const { cartTotal } = useCartContext();

  const costoEnvio = 0;

  return (
    <>
      <div className="cartSummary">
        <h2 className="cartSummaryTitle">Resumen de Orden</h2>
        <div className="cartSummaryInfo">
          <h3 className="cartSummarySubtitle">SubTotal</h3>
          <h3 className="cartSummaryAmount">
            ${cartTotal().toLocaleString('es-AR')}
          </h3>
        </div>
        <div className="cartSummaryInfo">
          <h3 className="cartSummarySubtitle">Costo de Envio</h3>
          <h3 className="cartSummaryAmount">
            ${costoEnvio.toLocaleString('es-AR')}
          </h3>
        </div>
        <div className="cartSummaryInfo cartSummaryTotal">
          <h3 className="cartSummarySubtitle">Total</h3>
          <h3 className="cartSummaryAmount">
            ${(cartTotal() + costoEnvio).toLocaleString('es-AR')}
          </h3>
        </div>
        <Link to="/checkout" className="checkoutBtn">
          Finalizar Compra
        </Link>
        <Link to="/" className="toProductsBtn">
          Seguir Comprando
        </Link>
      </div>
    </>
  );
};

export default CartSummary;
