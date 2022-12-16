import react, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (<Fragment> <header>
        <a href="#" class="logoo">Fit Nutration</a>
        <nav class="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#">store +</a>
                    <ul>
                    <li><Link to="/Products">Shop</Link></li>
                        <li><a href="#">Catogories+</a>
                            <ul>
                                <li><a href="#">Protien</a></li>
                                <li><a href="#">Creatien</a></li>
                                <li><a href="#">Weight Gainer & Carbs</a></li>
                            </ul></li>
                        <li><a href="#">shop by brand+ </a>
                            <ul>
                                <li><Link to="/Products3">Organic Nation</Link></li>
                                <li><Link to="/Products2">Muscle add</Link></li>
                                <li><Link to="/Products1">Challnger Nutration</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="<>">About Us </a></li>
                
                <li><Link to="/login">login</Link></li>
            </ul>
        </nav>
        <div class="header-actions"/>

<button class="action-btn" aria-label="Search">
 
</button>

<button class="action-btn user" aria-label="User">
  
</button>

<button class="action-btn" aria-label="cart">
 

</button>

    </header>
        
   
      </Fragment>)
}
export default Navbar;