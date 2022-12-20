import React, { useRef } from 'react';
import CartWidget from './CartWidget';
import menuIcon from '../assets/icons/menuicon.svg';
import mainLogo from '../assets/logos/logostefanos.png';

//React-Router Imports
import { NavLink } from 'react-router-dom';

//Import product Categories constants from utils
import { productCategories } from '../utils/productCategories';

const NavBar = () => {
  const refFilterContainer = useRef(null);
  const refMenuIcon = useRef(null);

  const handleMenuClick = () => {
    refFilterContainer.current.classList.toggle('navbarFilterContainer-active');
    refMenuIcon.current.classList.toggle('navbarMenuIcon-active');
  };

  //Obtain unique categories from utils/productCategories to map over and render

  const categoriesArr = productCategories.map((item) => item.category);
  const categories = ['todo', ...categoriesArr];

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
        {categories.map((category, index) => {
          return (
            <NavLink
              to={`/category/${category}`}
              key={index}
              className={({ isActive }) => (isActive ? 'activeLink' : '')}
            >
              <li className="navbarFilterItem" onClick={handleMenuClick}>
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
