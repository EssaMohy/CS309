<<<<<<< HEAD
import react, { Fragment } from "react";
import Navbar from "../Pages/Navbar";
=======
import react, { Fragment } from 'react';
import Navbar from '../Pages/Navbar';
>>>>>>> 4dca9ae145351790622975b37cbb48d16e890895

function ProductsMuscleADD() {
  return (
    <Fragment>
      {" "}
      <Navbar></Navbar>
      <section class="products" id="products">
        <h1 class="heading">
          {" "}
          latest <span>products</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <span class="discount">-10%</span>
            <div class="image">
              <img
                src={require("./images/shop by brand/Muscleadd/1.jpg")}
                alt=""
              />
              <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="cart-btn">
                  add to cart
                </a>
                <a href="#" class="fas fa-share"></a>
              </div>
            </div>
            <div class="content">
              <h3>product</h3>
              <div class="price">
                {" "}
                LE 12.99 <span>LE 15.99</span>{" "}
              </div>
            </div>
          </div>

          <div class="box">
            <span class="discount">-15%</span>
            <div class="image">
              <img
                src={require("./images/shop by brand/Muscleadd/2.jpg")}
                alt=""
              />
              <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="cart-btn">
                  add to cart
                </a>
                <a href="#" class="fas fa-share"></a>
              </div>
            </div>
            <div class="content">
              <h3>product</h3>
              <div class="price">
                {" "}
                LE 12.99 <span>LE 15.99</span>{" "}
              </div>
            </div>
          </div>

          <div class="box">
            <span class="discount">-5%</span>
            <div class="image">
              <img
                src={require("./images/shop by brand/Muscleadd/3.jpg")}
                alt=""
              />
              <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="cart-btn">
                  add to cart
                </a>
                <a href="#" class="fas fa-share"></a>
              </div>
            </div>
            <div class="content">
              <h3>productt</h3>
              <div class="price">
                {" "}
                LE 12.99 <span>LE 15.99</span>{" "}
              </div>
            </div>
          </div>

          <div class="box">
            <span class="discount">-20%</span>
            <div class="image">
              <img
                src={require("./images/shop by brand/Muscleadd/4.jpg")}
                alt=""
              />
              <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="cart-btn">
                  add to cart
                </a>
                <a href="#" class="fas fa-share"></a>
              </div>
            </div>
            <div class="content">
              <h3>product</h3>
              <div class="price">
                {" "}
                LE 12.99 <span>LE 15.99</span>{" "}
              </div>
            </div>
          </div>

          <div class="box">
            <span class="discount">-17%</span>
            <div class="image">
              <img
                src={require("./images/shop by brand/Muscleadd/5.jpg")}
                alt=""
              />
              <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="cart-btn">
                  add to cart
                </a>
                <a href="#" class="fas fa-share"></a>
              </div>
            </div>
            <div class="content">
              <h3>product</h3>
              <div class="price">
                {" "}
                LE 12.99 <span>LE 15.99</span>{" "}
              </div>
            </div>
          </div>

          <div class="box">
            <span class="discount">-3%</span>
            <div class="image">
              <img
                src={require("./images/shop by brand/Muscleadd/6.jpg")}
                alt=""
              />
              <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="cart-btn">
                  add to cart
                </a>
                <a href="#" class="fas fa-share"></a>
              </div>
            </div>
            <div class="content">
              <h3>product</h3>
              <div class="price">
                {" "}
                LE 12.99 <span>LE 15.99</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default ProductsMuscleADD;
