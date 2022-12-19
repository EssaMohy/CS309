import react, { Fragment } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Login() {
    return (<Fragment>
<header><Navbar></Navbar></header>
<div className='cover'>
    <form>
      <h1 className='text1'>Login</h1>
            <input type="text" placeholder="username" required/>
            <input type="password" placeholder="password" required />
            <div className='su'>
            <button type='submit'>Login</button>
            </div>
            <div className='newacc'>
            <p className='don'>don't have an account ? <Link to='/signup' className='sighnup'>Sign Up</Link></p>
            </div>
            </form>
    </div>
    </div>


    </Fragment>)
} export default Login;
