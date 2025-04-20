import React from 'react';
import './css/CheckoutPage.css';

function CheckoutPage() {
  return (
    <div>
      <div className="top-container">
        <img src="/TeslaLogo.png" alt="Tesla Logo" className="logo" />
        <div className ="top-row-info">
          <p>Model S</p>
          <p>Model 3</p>
          <p>Model X</p>
          <p>Model Y</p>
        </div>
        <div className="top-account-text">
          <p>Account</p>
        </div>
      </div>
      <div className="shipping-payment-text">
        <h1>Shipping Payment</h1>
      </div>
      <div className = "description-text">
        <p>Complete payment for shipping your Tesla parts or accessories.</p>
      </div>
      <div className="main-container">
        <div className="top-row">
          <div className="card shipping-card ">
            <div className ="shipping-information-text">
              <p>Shipping Information</p>
            </div>
            <div className="order-row">
              <div className="shipping-info-col">
                <div className="shipping-information-info">First Name</div>
                <input type="text" className="custom-textbox" />
              </div>
              <div className="shipping-info-col last-name">
                <div className="shipping-information-info">Last Name</div>
                <input type="text" className="custom-textbox" />
              </div>
            </div>
            <div className = "order-row">
            <div className="shipping-info-col">
                <div className="shipping-information-info">Address</div>
                <input type="text" className="custom-textbox" />
              </div>
            </div>
            <div className="order-row">
              <div className="shipping-info-col">
                <div className="shipping-information-info">City</div>
                <input type="text" className="custom-textbox-city" />
              </div>
              <div className="shipping-info-col last-name">
                <div className="shipping-information-info">State</div>
                <input type="text" className="custom-textbox-city" />
              </div>
              <div className="shipping-info-col last-name">
                <div className="shipping-information-info">Zip</div>
                <input type="text" className="custom-textbox-city" />
              </div>
            </div>
          </div>

          <div className="card order-card">
            <div className="order-summary">
              <h1>Order Summary</h1>
            </div>
            <div className="order-row">
              <div className = "order-text"> {/*left side of order summary*/}
                <p>Shipping</p>
                <p>Handling</p>
                <p>Tax</p>
              </div>
              <div className = "order-textBlack"> {/*left side of order summary*/}
                <p>$9.99</p>
                <p>$2.00</p>
                <p>$0.96</p>
              </div>
            </div>
            <div>
            <div className="line"></div>
            </div>
            <div className="order-row">
              <div className = "order-textTotal">
                <p>Total</p>
              </div>
              <div className = "order-textTotalNum"> {/*left side of order summary*/}
                  <p>$12.95</p>
              </div>
            </div>
          </div>
          <button type="submit" className="sign-in-button ">Pay for Shipping</button>
        </div>
        <div className = "privacy-text">
            <p>
              By completing this payment, you agree to Tesla's
              <span className="blue-text"> Terms of Use</span> and 
              <span className="blue-text"> Privacy Policy</span>.
            </p>
          </div>

          <div className="card shipping-method ">
            <div className ="shipping-information-text">
              <p>Shipping Method</p>
            </div>
            <div className = "order-row">
            </div>
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
