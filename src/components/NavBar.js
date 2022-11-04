import React from 'react';
import CartWidget from './CartWidget';
import menuIcon from '../imgs/icons/menuicon.svg';
import mainLogo from '../imgs/logos/logostefanos.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={menuIcon} alt="Menu Icon" className="navbarMenuIcon" />
      <img src={mainLogo} alt="" className="navbarLogo" />
      <ul className="navbarFilterContainer">
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
