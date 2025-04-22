import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignInPage from './signin/page';
import CheckoutPage from './checkout/page'; // Create this component if it doesn't exist

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;