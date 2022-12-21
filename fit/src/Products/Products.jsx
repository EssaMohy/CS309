import react, { Fragment } from "react";
import Navbar from "../Pages/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Product() {
  return (
    <Fragment>
      {" "}
      <Navbar></Navbar>
      <section class="products" id="products">
        <h1 class="heading">
          {" "}
          Featured <span>products</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <span class="discount">-10%</span>
            <div class="image">
              <img src={require("./images/protein/2.jpg")} alt="" />
              <div class="icons">
                <FavoriteBorderIcon></FavoriteBorderIcon>
                <a href="#" class="cart-btn">
                  add to cart
                </a>
                <a href="#" class="fas fa-share"></a>
              </div>
            </div>
            <div class="content">
              <h3>product</h3>
              <div class="price">
                LE 12.99 <span>LE 15.99 </span>{" "}
              </div>
            </div>
          </div>

          <div class="box">
            <span class="discount">-15%</span>
            <div class="image">
              <img src={require("./images/protein/1.jpg")} alt="" />
              <div class="icons">
                <FavoriteBorderIcon></FavoriteBorderIcon>
                <a href="#" class="cart-btn">
                  add to cart
                </a>
                <a href="#" class="fas fa-share"></a>
              </div>
            </div>
            <div class="content">
              <h3>product</h3>
              <div class="price">
                LE 12.99<span>LE 15.99 </span>{" "}
              </div>
            </div>
          </div>

          <div class="box">
            <span class="discount">-5%</span>
            <div class="image">
              <img src={require("./images/protein/3.jpg")} alt="" />
              <div class="icons">
                <a>
                  <FavoriteBorderIcon></FavoriteBorderIcon>
                </a>
                <a href="#" class="cart-btn">
                  add to cart
                </a>
                <a href="#" class="fas fa-share"></a>
              </div>
            </div>
            <div class="content">
              <h3>productt</h3>
              <div class="price">
                LE 12.99<span>LE 15.99</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default Product;
