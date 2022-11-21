import React, { useRef } from 'react';
import CartWidget from './CartWidget';
import menuIcon from '../assets/icons/menuicon.svg';
import mainLogo from '../assets/logos/logostefanos.png';

//React-Router Imports
import { NavLink } from 'react-router-dom';

//Product Catalog Import
import { items } from '../mocks/item.mock';

const NavBar = () => {
  const refFilterContainer = useRef(null);
  const refMenuIcon = useRef(null);

  const handleMenuClick = () => {
    refFilterContainer.current.classList.toggle('navbarFilterContainer-active');
    refMenuIcon.current.classList.toggle('navbarMenuIcon-active');
  };

  //Obtain unique categories from product data set to later map over and render

  const categoriesArr = items.map((item) => item.category);
  const indivCategories = new Set(categoriesArr);
  const categories = ['todo', ...indivCategories];

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
        {categories.map((category) => {
          return (
            <NavLink
              to={`/category/${category}`}
              className={({ isActive }) => (isActive ? 'activeLink' : '')}
            >
              <li className="navbarFilterItem">
                <button className="navbarFilterBtn">{category}</button>
              </li>
            </NavLink>
          );
        })}
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
