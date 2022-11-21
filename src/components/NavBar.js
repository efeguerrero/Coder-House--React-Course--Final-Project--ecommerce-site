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
      <NavLink to="/">
        <img src={mainLogo} alt="" className="navbarLogo" />
      </NavLink>
      {/* NavBar Menu Links */}
      <ul className="navbarFilterContainer" ref={refFilterContainer}>
        <NavLink
          to="/category/todo"
          className={({ isActive }) => (isActive ? 'activeLink' : '')}
        >
          <li className="navbarFilterItem">
            <button className="navbarFilterBtn">Todo</button>
          </li>
        </NavLink>
        <NavLink
          to="/category/alfombras"
          className={({ isActive }) => (isActive ? 'activeLink' : '')}
        >
          <li className="navbarFilterItem">
            <button className="navbarFilterBtn">Alfombras</button>
          </li>
        </NavLink>

        <NavLink
          to="/category/mochilas"
          className={({ isActive }) => (isActive ? 'activeLink' : '')}
        >
          <li className="navbarFilterItem">
            <button className="navbarFilterBtn">Mochilas</button>
          </li>
        </NavLink>

        <NavLink
          to="/category/bolsos"
          className={({ isActive }) => (isActive ? 'activeLink' : '')}
        >
          <li className="navbarFilterItem">
            <button className="navbarFilterBtn">Bolsos</button>
          </li>
        </NavLink>

        <NavLink
          to="/category/carteras"
          className={({ isActive }) => (isActive ? 'activeLink' : '')}
        >
          <li className="navbarFilterItem">
            <button className="navbarFilterBtn">Carteras</button>
          </li>
        </NavLink>

        <NavLink
          to="/category/sombreros"
          className={({ isActive }) => (isActive ? 'activeLink' : '')}
        >
          <li className="navbarFilterItem">
            <button className="navbarFilterBtn">Sombreros</button>
          </li>
        </NavLink>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
