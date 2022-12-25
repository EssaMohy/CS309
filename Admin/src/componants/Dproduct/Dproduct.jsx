import React from 'react';
import './Dproduct.css';
function Dproduct() {
  return (
    <div className='listcon'>
      <div className="list">
      <h1 className="ProductTitle">List of Products</h1>
      <table className='table'>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>discription</th>
        </tr>
        <tr>
          <td>Prouduct 1</td>
          <td>$80</td>
          <td>....</td>
          <td><button className="ProductButto">Delete</button></td>
          <td><button className="ProductButtot">Edit</button></td>
        </tr>
        <tr>
          <td>Prouduct 2</td>
          <td>$100</td>
          <td>....</td>
          <td><button className="ProductButto">Delete</button></td>
          <td><button className="ProductButtot">Edit</button></td>
        </tr>
        <tr>
          <td>Prouduct 3</td>
          <td>$250</td>
          <td>....</td>
          <td><button className="ProductButto">Delete</button></td>
          <td><button className="ProductButtot">Edit</button></td>
        </tr>
        <tr>
          <td>Prouduct 4</td>
          <td>$500</td>
          <td>....</td>
          <td><button className="ProductButto">Delete</button></td>
          <td><button className="ProductButtot">Edit</button></td>
        </tr>
      </table>
    </div>
    </div>
     );
}

export default Dproduct;
