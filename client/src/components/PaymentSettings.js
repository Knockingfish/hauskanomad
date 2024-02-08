import React, { useState } from 'react';

const PaymentSettings = () => {
  // To manage form data
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [apiKey, setApiKey] = useState('');
  const [currency, setCurrency] = useState('USD');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validating and submitting the form data to backend or payment service
    console.log('Form submitted:', { paymentMethod, apiKey, currency });
    // Adding logic to send the data to backend or payment service here
  };

  return (
    <div>
      <h2>Payment Settings</h2>
      <form onSubmit={handleSubmit}>
        {/* Payment Method */}
        <label>
          Payment Method:
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            {/* Adding more payment methods as needed */}
          </select>
        </label>

        {/* API Key */}
        <label>
          API Key:
          <input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
        </label>

        {/* Currency */}
        <label>
          Currency:
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            
          </select>
        </label>

        {/* Submit Button */}
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default PaymentSettings;
