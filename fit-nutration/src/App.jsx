

import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import ProductsCHAll from './pages/ProductsCHAll'
import ProductsMuscleADD from './pages/ProductsMuscleADD';
import ProductsORGA from './pages/ProductsORGA';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
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
        </Routes>
      </Router>




  );
}

export default App;
