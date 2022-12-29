import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Peoducts/Products";
import { Link } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import "./Home.css";

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

          <Link to="/AllProducts" class="btn">Shop now</Link>

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
              Without needing to search a lot and see what you want
              and where it is available and is it available in your country or not,

            </p>
            <p>
              so that is why we have provided you with the best 3 Egyptian companies
              for nutritional supplements in one place, and not only that,
              we also provided u a section of categories of what we have so the search become easy for u
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
      <h1 class="heading">
        {" "}
        <span> Featured </span> Products{" "}
      </h1>
      <section class="products">
        <Products cat={"Creatine"}></Products>
      </section>

      <Link to="/AllProducts" class="btn" style={{ marginLeft: "41%" }}>
        Show more Products
      </Link>
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
            <Link to="/">Home</Link>
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
          created by <span> Ahmed essam </span>{" "}
        </div>
      </section>
      <a href="#home" class="fas fa-arrow-up" id="scroll-top"></a>
    </Fragment>
  );
}
export default HomePage;
