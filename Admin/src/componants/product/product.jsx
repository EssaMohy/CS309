import React from "react";
import "./product.css";
function product() {
  return (
    <div className="productp">
      <div className="productTitleContainer">
        <h1 className="productTitle">Update and delete Products</h1>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://th.bing.com/th/id/R.178471364d9fc4a592e55bbe98c2f117?rik=7tJShfxh6jx%2bQw&riu=http%3a%2f%2fwww.fitlifegym.ca%2fimages%2fsupplements%2f10263582.jpg&ehk=%2faLt%2bBL40qTJ4uPGXAr%2b1dhN09p2i7eSFLt4MM58K%2fU%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              className="productImg"
            />
            <span className="productName">Product Name</span>
          </div>
          <div className="producBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">discription:</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Price :</span>
              <span className="productInfoValue">$300</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Product Name" />
            <label>Product Price</label>
            <input type="text" placeholder="Product Price" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://th.bing.com/th/id/R.178471364d9fc4a592e55bbe98c2f117?rik=7tJShfxh6jx%2bQw&riu=http%3a%2f%2fwww.fitlifegym.ca%2fimages%2fsupplements%2f10263582.jpg&ehk=%2faLt%2bBL40qTJ4uPGXAr%2b1dhN09p2i7eSFLt4MM58K%2fU%3d&risl=&pid=ImgRaw&r=0"
                alt=""
                className="productUploadImg"
              />
              <label for="file"></label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
            <button className="productButtonDele">Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default product;
