import react, { Fragment } from "react";
import Navbar from "./Navbar";
import Product from "../Products/Products";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";

function HomePage() {
  return (
    <Fragment>
      w
      <header>
        <Navbar></Navbar>
      </header>
      <section class="home" id="home">
        <div class="content">
          <h3>High Quality Supplemets</h3>
          <span> natural & Pure </span>
          <p>flash sale up to 40% today.</p>
          <a href="#" class="btn">
            shop now
          </a>
        </div>
      </section>
      <section class="about" id="about">
        <h1 class="heading">
          {" "}
          <span> about </span> us{" "}
        </h1>

        <div class="row">
          <div class="video-container">
            <video src="images/about-vid.mp4" loop autoplay muted></video>
            <h3>best Suplemets sellers</h3>
          </div>

          <div class="content">
            <h3>why choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              cumque sit nemo pariatur corporis perspiciatis aspernatur a ullam
              repudiandae autem asperiores quibusdam omnis commodi alias
              repellat illum, unde optio temporibus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium ea est commodi incidunt magni quia molestias
              perspiciatis, unde repudiandae quidem.
            </p>
            <a href="#" class="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
      <section>
        <h1 class="heading">
          {" "}
          <span> Categories </span>
        </h1>
        <Categories />
      </section>
      <section class="icons-container">
        <div class="icons">
          <img src="images/icon-1.png" alt="" />
          <div class="info">
            <h3>free delivery</h3>
            <span>on all orders</span>
          </div>
        </div>
        <div class="icons">
          <img src="images/icon-2.png" alt="" />
          <div class="info">
            <h3>10 days returns</h3>
            <span>moneyback guarantee</span>
          </div>
        </div>
        <div class="icons">
          <img src="images/icon-3.png" alt="" />
          <div class="info">
            <h3>offer & gifts</h3>
            <span>on all orders</span>
          </div>
        </div>
        <div class="icons">
          <img src="images/icon-4.png" alt="" />
          <div class="info">
            <h3>secure paymens</h3>
            <span>protected by paypal</span>
          </div>
        </div>
        //<Link to="/Products2">Muscle add</Link>
      </section>
      <Product></Product>{" "}
      <Link to="/Products" class="btno">
        Show more Products
      </Link>
      <section class="review" id="review">
        <h1 class="heading">
          {" "}
          customer's <span>review</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              asperiores laboriosam praesentium enim maiores? Ad repellat
              voluptates alias facere repudiandae dolor accusamus enim ut odit,
              aliquam nesciunt eaque nulla dignissimos.
            </p>
            <div class="user">
              <div class="user-info">
                <h3>customer</h3>
                <span>happy customer</span>
              </div>
            </div>
            <span class="fas fa-quote-right"></span>
          </div>

          <div class="box">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              asperiores laboriosam praesentium enim maiores? Ad repellat
              voluptates alias facere repudiandae dolor accusamus enim ut odit,
              aliquam nesciunt eaque nulla dignissimos.
            </p>
            <div class="user">
              <div class="user-info">
                <h3>customer</h3>
                <span>happy customer</span>
              </div>
            </div>
            <span class="fas fa-quote-right"></span>
          </div>

          <div class="box">
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              asperiores laboriosam praesentium enim maiores? Ad repellat
              voluptates alias facere repudiandae dolor accusamus enim ut odit,
              aliquam nesciunt eaque nulla dignissimos.
            </p>
            <div class="user">
              <div class="user-info">
                <h3>customer</h3>
                <span>happy customer</span>
              </div>
            </div>
            <span class="fas fa-quote-right"></span>
          </div>
        </div>
      </section>
      <section class="contact" id="contact">
        <h1 class="heading">
          {" "}
          <span> contact </span> us{" "}
        </h1>

        <div class="image">
          <img src="images/contact-img.svg" alt="" />
        </div>
      </section>
      <section class="footer">
        <div class="box-container">
          <div class="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">Store</a>
          </div>

          <div class="box">
            <h3>locations</h3>
            <a href="#">Egypt</a>
            <a href="#">USA</a>
            <a href="#">france</a>
          </div>

          <div class="box">
            <h3>contact info</h3>
            <a href="#">0111222333</a>
            <a href="#">example@gmail.com</a>
            <a href="#">Cairo, Egypt - 400104</a>
            <img src="./assists/images/payment.png" alt="" />
          </div>
        </div>

        <div class="credit">
          {" "}
          created by <span> Ahmed essam </span> | all rights reserved{" "}
        </div>
      </section>
    </Fragment>
  );
}
export default HomePage;
