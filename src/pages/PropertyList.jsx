import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import Filter from '../components/Filter';

const properties = [
  {
    id: 1,
    image: '/images/property1.jpg',
    title: 'Luxury Villa',
    description: 'A beautiful villa by the sea.',
    price: 250,
  },
  // More properties here
];

const PropertyList = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [bookedProperties, setBookedProperties] = useState([]);

  const handleBook = (property) => {
    setBookedProperties([...bookedProperties, property]);
  };

  const handleFilter = (filter) => {
    const filtered = properties.filter(p => p.price <= filter.priceRange);
    setFilteredProperties(filtered);
  };

  return (
    <div>
      <Filter onFilter={handleFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} onBook={handleBook} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
