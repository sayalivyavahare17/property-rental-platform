import React from 'react';

const Cart = ({ bookedProperties, onRemove }) => {
  const total = bookedProperties.reduce((acc, property) => acc + property.price, 0);

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h2 className="font-bold text-xl mb-2">Cart</h2>
      {bookedProperties.map((property, index) => (
        <div key={index} className="flex justify-between mb-2">
          <span>{property.title}</span>
          <span>${property.price}</span>
          <button onClick={() => onRemove(property)} className="text-red-500">Remove</button>
        </div>
      ))}
      <p className="font-bold">Total: ${total}</p>
    </div>
  );
};

export default Cart;
