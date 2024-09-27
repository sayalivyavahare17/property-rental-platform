import React, { useState } from 'react';
import PropertyList from './PropertyList';
import Cart from '../components/Cart';

const Home = () => {
  const [bookedProperties, setBookedProperties] = useState([]);

  const handleRemove = (propertyToRemove) => {
    setBookedProperties(bookedProperties.filter(p => p.id !== propertyToRemove.id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Property Rental Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="col-span-3">
          <PropertyList bookedProperties={bookedProperties} />
        </div>
        <div>
          <Cart bookedProperties={bookedProperties} onRemove={handleRemove} />
        </div>
      </div>
    </div>
  );
};

export default Home;
