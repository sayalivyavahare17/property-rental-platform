import React, { useState } from 'react';

const Checkout = () => {
  const [contactInfo, setContactInfo] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');

  const handleCheckout = () => {
    alert(`Contact Info: ${contactInfo}, Payment Info: ${paymentInfo}`);
  };

  return (
    <div className="p-4">
      <h2 className="font-bold text-2xl mb-4">Checkout</h2>
      <input
        type="text"
        value={contactInfo}
        onChange={(e) => setContactInfo(e.target.value)}
        placeholder="Contact Information"
        className="border p-2 w-full mb-4"
      />
      <input
        type="text"
        value={paymentInfo}
        onChange={(e) => setPaymentInfo(e.target.value)}
        placeholder="Payment Information"
        className="border p-2 w-full mb-4"
      />
      <button onClick={handleCheckout} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Complete Booking
      </button>
    </div>
  );
};

export default Checkout;
