import React from "react";
import "./App.css";
import Topbar from "./componants/topbar/topbar";
import Newm from "./componants/newM/newM";

import Product from "./componants/product/product";

function App() {
  return (
    <div className="container">
      <div className="top">
        <Topbar />
      </div>
      <div className="cont2"></div>
    </div>
  );
}

export default App;
