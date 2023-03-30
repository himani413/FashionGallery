import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"

import React from 'react';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";


import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import EmailVerification from "./pages/EmailVerification.jsx";




const App = () => {

  return (
    
      <Router>
        <Routes>
        <Route path="" element={<Home />} />
        <Route path="/pages/register" element={<Register />} />
        <Route path="/pages/login" element={<Login />} />
      </Routes>
      </Router>
    
  );

};

export default App;