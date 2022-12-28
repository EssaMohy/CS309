import React from "react";
import { Fragment } from "react";
import "./Products.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Fotter/Footer";
import Products from "../components/Peoducts/Products";
const AllProducts = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <section class="products" id="products">
        <h1 class="heading">
          {" "}
          latest <span>products</span>{" "}
        </h1>
        <h1 class="heading">
          {" "}
          latest <span>products</span>{" "}
        </h1>

        <Products />
      </section>

      <Footer />
    </Fragment>
  );
};

export default AllProducts;
