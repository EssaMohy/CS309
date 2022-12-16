import react, { Fragment } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Login() {
    return (<Fragment>
<header><Navbar></Navbar></header>
<div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form">
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>login</button>
          <p class="message">Not registered? </p> <Link to='/signup'>Sign Up</Link>
        </form>
      </div>
    </div>


    </Fragment>)
} export default Login;