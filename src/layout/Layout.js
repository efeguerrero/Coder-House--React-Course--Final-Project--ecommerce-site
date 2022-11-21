import React from 'react';

//React-router-dom Imports
import { Outlet } from 'react-router-dom';

//Components Imports
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <section className="mainContainer">
      <NavBar />
      {/* Outlet component displays depending on URL in browser and children defined in routes */}
      <Outlet />
      <Footer />
    </section>
  );
};

export default Layout;
