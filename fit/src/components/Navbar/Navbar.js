import { Fragment } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import "./nav.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Fragment>
      {" "}
      <header>
        <a href="#" class="logoo">
          Fit Nutration
        </a>
        <input type="checkbox" name="" id="toggler" />
        <label for="toggler" class="fas fa-bars"></label>

        <nav class="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Products">store +</Link>
              <ul>
                <li>
                  <Link to="/Products">Shop</Link>
                </li>
                <li>
                  <a href="#">shop by brand+ </a>
                  <ul>
                    <li>
                      <Link to="/products/Organic%20Nation">
                        Organic Nation
                      </Link>
                    </li>
                    <li>
                      <Link to="/Products2">Muscle add</Link>
                    </li>
                    <li>
                      <Link to="/Products1">Challnger Nutration</Link>
                    </li>
                  </ul>
                </li>{" "}
                <li>
                  <a href="#">categories+</a>
                  <ul>
                    <li>
                      <Link to="/products/Creatine">creatine </Link>
                    </li>
                    <li>
                      <Link to="/products/Protein">protein</Link>
                    </li>
                    <li>
                      <Link to="/products/Weight%20gainer">
                        weight gainer & Carbs
                      </Link>
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
              <StyledBadge badgeContent={quantity} color="warning">
                <ShoppingCartOutlinedIcon sx={{ fontSize: 25 }} />
              </StyledBadge>
            </IconButton>
          </Link>
          <IconButton aria-label="cart">
            <Link to="/UserPage">
              <AccountCircleIcon sx={{ fontSize: 25, color: "gray" }} />
            </Link>
          </IconButton>
        </div>
      </header>
    </Fragment>
  );
}
export default Navbar;
