import React from 'react';
import '../css/CheckoutPage.css';

function CheckoutPage() {
  return (
    <div className="checkout-page">
      <header className="header">
        <div className="logo-container">
          <img src="/TeslaLogo.png" alt="Tesla Logo" className="logo" />
        </div>
        <nav className="navigation">
          <a href="#" className="nav-link">Model S</a>
          <a href="#" className="nav-link">Model 3</a>
          <a href="#" className="nav-link">Model X</a>
          <a href="#" className="nav-link">Model Y</a>
        </nav>
        <div className="account-link">
          <a href="#">Account</a>
        </div>
      </header>

      <main className="main-content">
        <div className="page-header">
          <h1>Shipping Payment</h1>
          <p className="subtitle">Complete payment for shipping your Tesla parts or accessories.</p>
        </div>

        <div className="content-container">
          <div className="columns-wrapper">
            <div className="left-column">
              <div className="card shipping-info-card">
                <h2>Shipping Information</h2>
                <div className="form-row">
                  <div className="form-group half">
                    <label>First name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group half">
                    <label>Last name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group full">
                    <label>Address</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group third">
                    <label>City</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group third">
                    <label>State</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group third">
                    <label>ZIP</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>

              <div className="card shipping-method-card">
                <h2>Shipping Method</h2>
                <div className="shipping-option">
                  <label className="radio-container">
                    <input type="radio" name="shipping" checked />
                    <span className="radio-custom"></span>
                    <span className="option-label">Free Express Shipping (7-14 business days)</span>
                    <span className="option-price">$0.00</span>
                  </label>
                </div>
              </div>

              <div className="card payment-method-card">
                <h2>Payment Method</h2>
                <div className="payment-option">
                  <label className="radio-container">
                    <input type="radio" name="payment" checked />
                    <span className="radio-custom"></span>
                    <span className="option-label">Credit Card</span>
                  </label>
                  <div className="card-icons">
                    <div className="card-icon"></div>
                    <div className="card-icon"></div>
                    <div className="card-icon"></div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group half">
                    <label>First name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group half">
                    <label>Last name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group full">
                    <label>Credit Card</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group half">
                    <label>CVV</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group half">
                    <label>Expiration Date</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="card order-summary-card">
                <h2>Order Summary</h2>
                <div className="summary-row">
                  <span className="summary-label">Shipping</span>
                  <span className="summary-value">$9.99</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Handling</span>
                  <span className="summary-value">$2.00</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Tax</span>
                  <span className="summary-value">$0.96</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total">
                  <span className="summary-label">Total</span>
                  <span className="summary-value">$12.95</span>
                </div>
              </div>

              <button className="primary-button">Pay for Shipping</button>
              
              <div className="terms-text">
                By completing this payment, you agree to Tesla's 
                <a href="#" className="terms-link"> Terms of Use</a> and 
                <a href="#" className="terms-link"> Privacy Policy</a>.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CheckoutPage;
