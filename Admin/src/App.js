import React from "react";
import "./App.css";
import Topbar from "./componants/topbar/topbar";
import Newproduct from "./componants/newproduct/newproduct"
import Dproduct from "./componants/Dproduct/Dproduct"
import Product from "./componants/Uproduct/Uproduct";

function App() {
  return (
    <div className="container">
      <div className="top">
        <Topbar />
      </div>
      <div className="cont2"></div>
      <Newproduct/><Product/><Dproduct/> 
    </div>
  );
}

export default App;
