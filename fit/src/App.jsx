import React from "react";
import HomePage from "./Pages/HomePage/Homepage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/SignIN/Login";
import Signup from "./Pages/SignIN/Signup";
import Checkout from "./components/checkout/Checkout";
import Cart from "./Pages/Cart/Cart";
import User from "./Pages/user/User";
import SinglePro from "./Pages/SingleProduct/singlePro";
import ProductList from "./Products/ProductList";
import { useSelector } from "react-redux";
import AllProducts from "./Products/AllProducts";
import SearchList from "./Pages/SearchList.jsx";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/products/search" element={<SearchList />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/product/:id" element={<SinglePro />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/Cheackout"
            element={user ? <Checkout></Checkout> : <Navigate to="/login" />}
          />
          <Route path="/Cart" element={<Cart />} />
          <Route
            path="/UserPage"
            element={user ? <User></User> : <Navigate to="/login" />}
          />
          <Route path="/SinglePro" element={<SinglePro />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
