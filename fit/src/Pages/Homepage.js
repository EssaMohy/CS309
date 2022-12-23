import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Product from "../Products/Products";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <Fragment>
      <header>
        <Navbar></Navbar>
      </header>
      <section class="home" id="home">
        <div class="content">
          <h3>High Quality Supplemets</h3>
          <span> natural & Pure </span>
          <p>flash sale up to 40% today.</p>
          <Link to="/Products">
            <a href="#" class="btn">
              shop now
            </a>
          </Link>
        </div>
      </section>
      <section class="about" id="about">
        <h1 class="heading">
          {" "}
          <span> about </span> us{" "}
        </h1>

        <div class="row">
          <div class="video-container">
            <img
              src="https://media.giphy.com/media/1VTIAWmFNhhwfWeCfN/giphy.gif"
              loop
              autoplay
              muted
            ></img>
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
          </div>
        </div>
      </section>
      <section>
        <h1 class="heading">
          {" "}
          <span> Popular </span> brands{" "}
        </h1>
        <Categories />
      </section>
      <section class="icons-container">
        <div class="icons">
          <img src={require("./images/icon-1.png")} alt="" />
          <div class="info">
            <h3>free delivery</h3>
            <span>on all orders</span>
          </div>
        </div>
        <div class="icons">
          <img src={require("./images/icon-2.png")} alt="" />
          <div class="info">
            <h3>10 days returns</h3>
            <span>moneyback guarantee</span>
          </div>
        </div>
        <div class="icons">
          <img src={require("./images/icon-3.png")} alt="" />
          <div class="info">
            <h3>offer & gifts</h3>
            <span>on all orders</span>
          </div>
        </div>
        <div class="icons">
          <img src={require("./images/icon-4.png")} alt="" />
          <div class="info">
            <h3>secure paymens</h3>
            <span>protected by paypal</span>
          </div>
        </div>
      </section>
      <Product></Product>{" "}
      <Link to="/Products" class="btno">
        Show more Products
      </Link>
      <Footer />
    </Fragment>
  );
}
export default HomePage;
