import { Link } from "react-router-dom";
const Product = ({ item }) => {
  return (
    <div class="box">
      <div class="image">
        <img src={item.img} alt="" />
        <div class="icons">
          <a href="#" class="fas fa-shopping-cart"></a>
          <a href="#" class="cart-btn">
            add to cart
          </a>
          <Link to={`/product/${item._id}`}>
            <a href="#" class="fas fa-eye"></a>
          </Link>
        </div>
      </div>
      <div class="content">
        <h3>{item.title}</h3>
        <div class="price">{item.price} EGP</div>
      </div>
    </div>
  );
};

export default Product;
