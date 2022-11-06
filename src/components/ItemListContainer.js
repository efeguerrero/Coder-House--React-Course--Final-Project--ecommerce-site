import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="msgContainer">
      <h2 className="greetingMsg">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
