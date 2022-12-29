import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./componants/topbar/topbar";
import Newproduct from "./componants/newproduct/newproduct";
import Dproduct from "./componants/Dproduct/Dproduct";
import Product from "./componants/Uproduct/Uproduct";
import Pro from "./Pages/proList";
import Hhome from "./Pages/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Hhome></Hhome>} />
          <Route path="/pro" element={<Pro />} />
          <Route path="/new" element={<Newproduct />} />
          <Route path="/edit" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
