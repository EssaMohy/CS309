import React from "react";
import HomePage from "./Pages/HomePage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products/Products";
import ProductsCHAll from "./Products/ProductsCHAll";
import ProductsMuscleADD from "./Products/ProductsMuscleADD";
import ProductsORGA from "./Products/ProductsORGA";
import Login from "./Pages/SignIN/Login";
import Signup from "./Pages/SignIN/Signup";
import Checkout from "./components/checkout/Checkout";
import Cart from "./Pages/Cart/Cart";
import User from "./Pages/user/User";
import SinglePro from "./Pages/SingleProduct/singlePro";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products1" element={<ProductsCHAll />} />
          <Route path="/Products2" element={<ProductsMuscleADD />} />
          <Route path="/Products3" element={<ProductsORGA />} />
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