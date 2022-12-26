import react, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Products.css";

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
        
            <div class="image">
              <img src={require("./images/protein/2.jpg")} alt="" />
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>

                <a href="#" class="cart-btn">
                  add to cart
                </a>
                <a href="#" class="fas fa-eye"></a>
              </div>
            </div>
            <div class="content">
              <h3>product</h3>
              <div class="price">
                {" "}
                LE 12.99 {" "}
              </div>
            </div>
          </div>

          <div class="box">
           
            <div class="image">
              <img src={require("./images/protein/1.jpg")} alt="" />
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>

                <a href="#" class="cart-btn">
                  add to cart
                </a>
                <a href="#" class="fas fa-eye"></a>
              </div>
            </div>
            <div class="content">
              <h3>product</h3>
              <div class="price">
                {" "}
                LE 12.99 {" "}
              </div>
            </div>
          </div>

          <div class="box">
           
            <div class="image">
              <img src={require("./images/protein/3.jpg")} alt="" />
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>

                <a href="#" class="cart-btn">
                  add to cart
                </a>
                <a href="#" class="fas fa-eye"></a>
              </div>
            </div>
            <div class="content">
              <h3>product</h3>
              <div class="price">
                {" "}
                LE 12.99 {" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default Product;
