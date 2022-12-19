import react, { Fragment } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Signup() {
    return (<Fragment>
<header><Navbar></Navbar></header>
       <div className='cover2'>
<form>
  <h1 className='text1'>register</h1>
  <input type="text" placeholder="First Name" required/>
  <input type="text" placeholder="Last Name" required/>
  <input type="email" placeholder="E-mail address" required/>
  <input type="password" placeholder="Enter Password" required/>
  <input type="password" placeholder="Confirm password" required/>
  <div className='newacc'>
        <p className='don'>already have an account <Link to='/signup'>Sign In</Link></p>
        <div className='su'>
        <button type='submit'>Sign Up</button>
        </div>
        </div>
        </form>
</div>


    </Fragment>)
} export default Signup;
