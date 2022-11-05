import React, { useRef } from 'react';
import CartWidget from './CartWidget';
import menuIcon from '../imgs/icons/menuicon.svg';
import mainLogo from '../imgs/logos/logostefanos.png';

const NavBar = () => {
  const refFilterContainer = useRef(null);
  const refMenuIcon = useRef(null);

  const handleMenuClick = () => {
    refFilterContainer.current.classList.toggle('navbarFilterContainer-active');
    refMenuIcon.current.classList.toggle('navbarMenuIcon-active');
  };

  return (
    <nav className="navbar">
      <img
        src={menuIcon}
        onClick={handleMenuClick}
        alt="Menu Icon"
        className="navbarMenuIcon"
        ref={refMenuIcon}
      />
      <img src={mainLogo} alt="" className="navbarLogo" />
      <ul className="navbarFilterContainer" ref={refFilterContainer}>
        <li className="navbarFilterItem">
          <button className="navbarFilterBtn">Todo</button>
        </li>
        <li className="navbarFilterItem">
          <button className="navbarFilterBtn">Alfombras</button>
        </li>
        <li className="navbarFilterItem">
          <button className="navbarFilterBtn">Mochilas</button>
        </li>
        <li className="navbarFilterItem">
          <button className="navbarFilterBtn">Bolsos</button>
        </li>
        <li className="navbarFilterItem">
          <button className="navbarFilterBtn">Carteras</button>
        </li>
        <li className="navbarFilterItem">
          <button className="navbarFilterBtn">Sombreros</button>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
