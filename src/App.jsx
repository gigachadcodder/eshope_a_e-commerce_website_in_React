import { useState } from "react";
import "./App.css";
import Checkout from "./pages/CheckoutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

function App() {
  return (
    <div className="bg-gray-300">
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
