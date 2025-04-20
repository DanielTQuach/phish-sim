import React from 'react';
import './css/CheckoutPage.css';

function CheckoutPage() {
  return (
    <div>
      <div className="top-container">
        <img src="/TeslaLogo.png" alt="Tesla Logo" className="logo" />
      </div>
      <div className="main-container">
      <h1>Shipping Payment</h1>
        <h2>Complete payment for shipping your Tesla parts or accessories.</h2>
        <div className="top-row">
          <div className="card shipping-card">
            <h1>Shipping Information</h1>
            <p>Address, name, etc.</p>
          </div>

          <div className="card order-card">
            <h1>Order Summary</h1>
            <p>Items, prices, totals</p>
          </div>
        </div>

        <div className="card shipping-card">
          <h1>Shipping Method</h1>
          <p>Standard, Express, etc.</p>
        </div>

        <div className="card shipping-card">
          <h1>Payment Method</h1>
          <p>Credit card, PayPal, etc.</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
