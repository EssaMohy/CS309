import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Fragment } from "react";

const Product = ({ item }) => {
  return (
    <Fragment>
      <section class="products" id="products">
        <div class="box-container" />
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
      </section>
    </Fragment>
  );
};

export default Product;
