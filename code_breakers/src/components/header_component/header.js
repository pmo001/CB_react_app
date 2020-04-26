import React from 'react';
//must import this header.js to App.js

//         component;src          
import logo from "../../images/mainLogo.png";

//       v must begin w/ capital letter
function Header() {
  return (
    //wrapper html5 header element
    <header>
        
        <a href="home">
            <img src={logo} width="253px" height="72px"  alt="company logo"/>
        </a>

        
        <nav>
            <ul>
                <li>
                    <a href="About_Us_Page" >ABOUT US</a>
                </li>
                <li>
                    <a href="Reviews">REVIEWS</a>
                </li>
                <li>
                    <a href="FAQ">FAQ</a>
                </li>
                <li>
                    <a href="Contact_Us_Page">CONTACT US</a>
                </li>
                <li id="apply_now">
                    <a href="Apply_Now_Page">APPLY NOW</a>
                </li>
            </ul>
        </nav>

    </header>
  );
}

export default Header;
