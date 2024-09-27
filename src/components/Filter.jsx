import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleFilter = () => {
    onFilter({ location, priceRange });
  };

  return (
    <div className="mb-4 flex space-x-4">
      <input 
        type="text" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="Location"
        className="border p-2 rounded" 
      />
      <input 
        type="number" 
        value={priceRange} 
        onChange={(e) => setPriceRange(e.target.value)} 
        placeholder="Max Price"
        className="border p-2 rounded" 
      />
      <button onClick={handleFilter} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Filter
      </button>
    </div>
  );
};

export default Filter;
