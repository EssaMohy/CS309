import { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const Search = ({ query }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          query
            ? `http://localhost:5000/api/products/search?key=${query}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [query]);

  return (
    <div class="box-container">
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Search;
