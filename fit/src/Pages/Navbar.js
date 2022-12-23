import { Fragment } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Navbar() {
  return (
    <Fragment>
      {" "}
      <header>
        <a href="#" class="logoo">
          Fit Nutration
        </a>
        <input type="checkbox" name="" id="toggler"/>
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
              <StyledBadge badgeContent={4} color="warning">
                <ShoppingCartOutlinedIcon sx={{ fontSize: 25 }} />
              </StyledBadge>
            </IconButton>
          </Link>
          <IconButton aria-label="cart">
            <Link to="/UserPage">
            <AccountCircleIcon sx={{ fontSize: 25 ,color:"gray"}} />
            </Link>
          </IconButton>
        </div>
      </header>
    </Fragment>
  );
}
export default Navbar;
