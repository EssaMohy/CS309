import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./proList.css";
import Topbar from "../componants/topbar/topbar";

const ProductItem = ({ item }) => {
  return (
    <div class="box">
      <div class="image">
        <img src={item.img} alt="" />
        <div class="icons">
          <a href="#" class="cart-btn">
            Edit
          </a>
          <a href="#" class="cart-btn">
            Delete
          </a>
        </div>
      </div>
      <div class="content">
        <h3>{item.name}</h3>
        <div class="price"> {item.price} EGP </div>
      </div>
    </div>
  );
};

export default ProductItem;
