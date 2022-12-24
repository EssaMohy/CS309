import React from 'react';
import "./newproduct.css"
function newproduct() {
  return (
    <div className="newProduct">
      <h1 className="ProductTitle">Add Products</h1>
      <form className="ProductForm">
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
          <label>Stock</label>
          <input type="text" placeholder="122" />
        </div>
        <div className="ProductItem">
          <label>discribtion</label>
          <input type="text" className='dis' placeholder="it's a good item" />
        </div>
        <button className="ProductButton">Create</button>
      </form>
    </div>
  );
}

export default newproduct;





// {/* <div className="newProduct">
//       <h1 className="ProductTitle">New Product</h1>
//       <form className="ProductForm">
//         <div className="ProductItem">
//           <label>Image</label>
//           <input type="file" id="file" />
//         </div>
//         <div className="ProductItem">
//           <label>Name</label>
//           <input type="text" placeholder="Product Name" required/>
//         </div>
//         <div className="ProductItem">
//           <label>Price</label>
//           <input type="text" placeholder="Product Price" required/>
//         </div>
//         <div className="ProductItem">
//           <label>Stock</label>
//           <input type="text" placeholder="122" />
//         </div>
//         <div className="ProductItem">
//           <label>discribtion</label>
//           <input type="text" className='dis' placeholder="it's a good item" />
//         </div>
//         <button className="ProductButton">Create</button>
//       </form>
//     </div> */}