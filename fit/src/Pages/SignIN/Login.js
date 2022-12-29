import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./login.css";
import { login } from "../../redux/apiCalls";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
const Error = styled.span`
  color: red;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <Fragment>
      <header>
        <Navbar></Navbar>
      </header>
      <div class="login-page">
        <div class="form">
          <div class="login">
            <div class="login-header">
              <h3>LOGIN</h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form class="login-form">
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleClick} disabled={isFetching}>
              login
            </button>
            {error && <Error>Something went wrong...</Error>}
            <p class="message">Not registered? </p>{" "}
            <Link to="/signup" style={{ color: "#e86a43" }}>
              Sign Up
            </Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
export default Login;
