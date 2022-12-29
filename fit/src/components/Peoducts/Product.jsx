import { Link } from "react-router-dom";
const Product = ({ item }) => {
  return (
    <div class="box">
      <div class="image">
        <img src={item.img} alt="" />
        <div class="icons">
          <Link to={"/Cart"} class="fas fa-shopping-cart">

          </Link>

          <Link to={`/product/${item._id}`} class="fas fa-eye">

          </Link>
        </div>
      </div>
      <div class="content">
        <h3>{item.name}</h3>
        <div class="price">{item.price} EGP</div>
      </div>
    </div>
  );
};

export default Product;
