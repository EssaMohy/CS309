import react, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./signup.css";
import { register } from "../../redux/apiCalls";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
function Signup() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { first_name, last_name, email, password });
  };
  return (
    <Fragment>
      <header>
        <Navbar></Navbar>
      </header>
      <div class="signup-box">
        <h1>Sign Up</h1>
        <h4>It's free and only takes a minute</h4>
        <form>
          <label>First Name</label>
          <input
            type="text"
            placeholder=""
            onChange={(e) => setFirst_name(e.target.value)}
          />
          <label>Last Name</label>
          <input
            type="text"
            placeholder=""
            onChange={(e) => setLast_name(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="button"
            className="btn"
            value="Submit"
            onClick={handleClick}
          />
          <closeform></closeform>
        </form>
      </div>
      <p class="para-2">
        Already have an account? <Link to="/login">login</Link>
      </p>
    </Fragment>
  );
}
export default Signup;
