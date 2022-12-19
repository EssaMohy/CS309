import { InputLabel } from "@mui/material";
import react, { Fragment } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

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
        <div class="header-actions" />

        <button class="action-btn" aria-label="Search"></button>

        <button class="action-btn user" aria-label="User"></button>

        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="Warning">
            <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
          </StyledBadge>
        </IconButton>
      </header>
    </Fragment>
  );
}
export default Navbar;
