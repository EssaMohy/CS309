import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./proList.css";
import Topbar from "../componants/topbar/topbar";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
function Pro({ cat }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);
  return (
    <Fragment>
      <header>
        <Topbar></Topbar>
      </header>

      <section class="products" id="products">
        <h1 class="heading">
          {" "}
          All <span>products</span>{" "}
        </h1>

        <div class="box-container">
          {products.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
      </section>
    </Fragment>
  );
}
export default Pro;
