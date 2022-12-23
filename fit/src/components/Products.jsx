import styled from "styled-components";
import { featuredProducts } from "../data";
import Product from "./Product";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Fragment } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  console.log(featuredProducts);
  const listItems = featuredProducts.map((item) => (
    <Container>
      <section class="products" key={item.id}>
        <div class="box-container">
          <div class="box">
            <span class="discount">{item.discount}</span>
            <div class="image">
              <img src={item.img} alt="" />
              <div class="icons">
                <FavoriteBorderIcon></FavoriteBorderIcon>
                <a href="#" class="cart-btn">
                  add to cart
                </a>
                <SearchIcon></SearchIcon>
              </div>
            </div>
            <div class="content">
              <h3>{item.name}</h3>
              <div class="price">
                {item.price1} <span>{item.price2} </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  ));
  return <div className="products">{listItems}</div>;
};

export default Products;
