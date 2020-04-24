import React from 'react';
//must import this header.js to App.js

//         component;src          
import logo from "../../images/mainLogo.png";

//       v must begin w/ capital letter
function Header() {
  return (
    //wrapper html5 header element
    <header>
        
        <a href="#">
            <img src={logo} width="253px" height="72px"  alt="company logo"/>
        </a>

        
        <nav>
            <ul>
                <li>
                    <a href="#">ABOUT US</a>
                </li>
                <li>
                    <a href="#">REVIEWS</a>
                </li>
                <li>
                    <a href="#">FAQ</a>
                </li>
                <li>
                    <a href="#">CONTACT US</a>
                </li>
                <li>
                    <a href="#">APPLY NOW</a>
                </li>
            </ul>
        </nav>

    </header>
  );
}

export default Header;
