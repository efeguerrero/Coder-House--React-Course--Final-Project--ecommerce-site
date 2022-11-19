import React from 'react';

//Component Imports
import ItemListContainer from '../components/ItemListContainer';
import NavBar from '../components/NavBar';

const Category = () => {
  return (
    <section className="mainContainer">
      <NavBar />
      <ItemListContainer />
    </section>
  );
};

export default Category;
