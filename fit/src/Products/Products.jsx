import react, { Fragment } from "react";
import Navbar from "../components/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { featuredProducts } from "../data";

function Product() {
  console.log(featuredProducts);
  const listItems = featuredProducts.map((item) => (
    <div class="box">
      <span class="discount">{item.discount}</span>
      <div class="image">
        <img src={item.img} alt="" />
        <div class="icons">
          <a>
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </a>
          <a href="#" class="cart-btn">
            add to cart
          </a>
          <a>
            <SearchIcon></SearchIcon>
          </a>
        </div>
      </div>
      <div class="content">
        <h3>{item.name}</h3>
        <div class="price">
          {item.price1} <span>{item.price2} </span>{" "}
        </div>
      </div>
    </div>
  ));
  return (
    <Fragment>
      {" "}
      <Navbar></Navbar>
      <section class="products" id="products">
        <h1 class="heading">
          {" "}
          Featured <span>products</span>{" "}
        </h1>

        <div class="box-container">{listItems}</div>
      </section>
    </Fragment>
  );
}
export default Product;
