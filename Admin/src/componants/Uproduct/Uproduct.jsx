import React from "react";
function Product() {
  return (
    <div className="productp">
       <form className="ProductForm">
      <h1 className="ProductTitle">Update Product</h1>
        <div className="ProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="ProductItem">
          <label>Name</label>
          <input type="text" placeholder="Product Name" required/>
        </div>
        <div className="ProductItem">
          <label>Price</label>
          <input type="text" placeholder="Product Price" required/>
        </div>
        <div className="ProductItem">
          <label>discribtion</label>
          <input type="text" className='dis' placeholder="it's a good item" />
        </div>
        <button className="ProductButton">Save</button>
      </form>
    </div>
  );
}

export default Product;