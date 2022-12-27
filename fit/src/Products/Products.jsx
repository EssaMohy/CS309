import react, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Products.css";
import Products from "../components/Peoducts/Products";
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
        <Products />
      </section>
    </Fragment>
  );
}
export default Product;
