import React, { useRef } from 'react';
import CartWidget from './CartWidget';
import menuIcon from '../assets/icons/menuicon.svg';
import mainLogo from '../assets/logos/logostefanos.png';

//React-Router Imports
import { NavLink } from 'react-router-dom';

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
          <NavLink
            to="/category/todo"
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
          >
            <button className="navbarFilterBtn">Todo</button>
          </NavLink>
        </li>
        <li className="navbarFilterItem">
          <NavLink
            to="/category/alfombras"
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
          >
            <button className="navbarFilterBtn">Alfombras</button>
          </NavLink>
        </li>
        <li className="navbarFilterItem">
          <NavLink
            to="/category/mochilas"
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
          >
            <button className="navbarFilterBtn">Mochilas</button>
          </NavLink>
        </li>
        <li className="navbarFilterItem">
          <NavLink
            to="/category/bolsos"
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
          >
            <button className="navbarFilterBtn">Bolsos</button>
          </NavLink>
        </li>
        <li className="navbarFilterItem">
          <NavLink
            to="/category/carteras"
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
          >
            <button className="navbarFilterBtn">Carteras</button>
          </NavLink>
        </li>
        <li className="navbarFilterItem">
          <NavLink
            to="/category/sombreros"
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
          >
            <button className="navbarFilterBtn">Sombreros</button>
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
