import React from 'react';

const PropertyCard = ({ property, onBook }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover"/>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{property.title}</h2>
        <p className="text-gray-700 text-base">{property.description}</p>
        <p className="text-gray-900 font-bold">${property.price} / night</p>
        <button 
          onClick={() => onBook(property)} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
