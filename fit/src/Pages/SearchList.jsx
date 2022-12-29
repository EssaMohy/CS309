import { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Peoducts/Search";
import Footer from "../components/Fotter/Footer";

import { useLocation } from "react-router-dom";

const SearchList = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>

      <section class="products" id="products">
        <h1 class="heading">
          {" "}
          latest <span>products</span>{" "}
        </h1>
        <h1 class="heading">
          {" "}
          latest <span>products</span>{" "}
        </h1>

        <Search />
      </section>

      <Footer />
    </Fragment>
  );
};

export default SearchList;
