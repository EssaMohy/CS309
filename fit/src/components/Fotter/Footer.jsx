import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <Fragment>
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
          created by <span> Ahmed</span> &<span> Essam </span>{" "}
        </div>
      </section>
    </Fragment>
  );
};

export default Footer;
