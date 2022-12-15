import react, { Fragment } from 'react';


function Navbar() {
    return (<Fragment> <header>
        <a href="#" class="logoo">Fit Nutration</a>
        <nav class="navbar">
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">store +</a>
                    <ul>
                    <li><a href="#">Shop</a></li>
                        <li><a href="#">Catogories+</a>
                            <ul>
                                <li><a href="#">Protien</a></li>
                                <li><a href="#">Creatien</a></li>
                                <li><a href="#">Weight Gainer & Carbs</a></li>
                            </ul></li>
                        <li><a href="#">shop by brand+ </a>
                            <ul>
                                <li><a href="#">Organic nation</a></li>
                                <li><a href="#">Muscle add</a></li>
                                <li><a href="#">Challnger Nutration</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="<>">About Us </a></li>
                
                <li><a href="#"> login</a></li>
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