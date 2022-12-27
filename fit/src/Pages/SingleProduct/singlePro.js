import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./singlePro.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

function SinglePro() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };
  return (
    <Fragment>
      {" "}
      <header>
        <Navbar></Navbar>
      </header>{" "}
      <body>
        <div class="pro_detail">
          <div>
            <img class="pro_detail_image" src={product.img} alt="" />
          </div>
          <div class="pro_dic">
            <div class="pro_head">
              <h3 class="pro_heading">{product.title}</h3>
              <p class="pro_price">{product.price} EGP</p>
            </div>
            <div class="pro_size"></div>
            <p class="btn" style={{ width: "400px" }} onClick={handleClick}>
              ADD TO CART
            </p>
            <div class="description">
              <h3 class="desc_head">Description</h3>
              <p class="desc_data"> {product.desc}</p>
            </div>
          </div>
        </div>
      </body>
    </Fragment>
  );
}
export default SinglePro;
