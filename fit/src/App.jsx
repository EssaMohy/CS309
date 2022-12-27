import React from "react";
import HomePage from "./Pages/HomePage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/SignIN/Login";
import Signup from "./Pages/SignIN/Signup";
import Checkout from "./components/checkout/Checkout";
import Cart from "./Pages/Cart/Cart";
import User from "./Pages/user/User";
import SinglePro from "./Pages/SingleProduct/singlePro";
import ProductList from "./Products/ProductList";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<SinglePro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Cheackout" element={<Checkout></Checkout>} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/UserPage" element={<User />} />
          <Route path="/SinglePro" element={<SinglePro />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
