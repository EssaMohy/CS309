import React from 'react';
import "./newproduct.css"
function newproduct() {
  return (
      <form className="ProductForm">
      <h1 className="ProductTitle">Add Products</h1>
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
        <button className="ProductButton">Create</button>
      </form>
    
  );
}

export default newproduct;

