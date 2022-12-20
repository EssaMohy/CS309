import { InputLabel } from "@mui/material";
import react, { Fragment } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

function Navbar() {
  return (
    <Fragment>
      {" "}
      <header>
        <a href="#" class="logoo">
          Fit Nutration
        </a>
        <label>
          {" "}
          menu
          <input type="checkbox" id="menu-bar" />
        </label>

        <nav class="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">store +</a>
              <ul>
                <li>
                  <Link to="/Products">Shop</Link>
                </li>
                <li>
                  <a href="#">Catogories+</a>
                  <ul>
                    <li>
                      <a href="#">Protien</a>
                    </li>
                    <li>
                      <a href="#">Creatien</a>
                    </li>
                    <li>
                      <a href="#">Weight Gainer & Carbs</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">shop by brand+ </a>
                  <ul>
                    <li>
                      <Link to="/Products3">Organic Nation</Link>
                    </li>
                    <li>
                      <Link to="/Products2">Muscle add</Link>
                    </li>
                    <li>
                      <Link to="/Products1">Challnger Nutration</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </nav>
        <div class="search-container">
          <form action="">
            <input type="text" placeholder="Search..." name="search" />
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div>
          <Link to="/Cart">
            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="warning">
                <ShoppingCartOutlinedIcon sx={{ fontSize: 25 }} />
              </Badge>
            </IconButton>
          </Link>
        </div>
      </header>
    </Fragment>
  );
}
export default Navbar;
