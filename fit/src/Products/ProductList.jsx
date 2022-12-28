import { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Peoducts/Products";
import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from "../components/Fotter/Footer";
import "./Products.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Wrapper = styled.div`
  padding: 100px;
  ${mobile({ padding: "10px" })}
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
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

        <Products cat={cat} />
      </section>

      <Footer />
    </Fragment>
  );
};

export default ProductList;
