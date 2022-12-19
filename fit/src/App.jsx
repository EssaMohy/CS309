import React from "react";
//import HomePage from "./Pages/HomePage";
import HomePage from './Pages1/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Products/Products';
import ProductsCHAll from './Products/ProductsCHAll'
import ProductsMuscleADD from './Products/ProductsMuscleADD';
import ProductsORGA from './Products/ProductsORGA';
import Login from './Pages1/Login';
import Signup from './Pages1/Signup'
import Checkout from "./components/checkout/Checkout";

const App = () => {
   //return <HomePage />;
 
    return (

      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/Products1' element={<ProductsCHAll/>} />
            <Route path='/Products2' element={<ProductsMuscleADD/>} />
            <Route path='/Products3' element={<ProductsORGA/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/Cheackout' element={<Checkout></Checkout>} />
          </Routes>
        </Router>
  
  
  
      </div>
    );
  }
  

export default App;
