import React from 'react';
//must import this footer.js to App.js

import logo from "../../images/logo_footer.png";

//       v must begin w/ capital letter
function Footer() {
  return (
    //wrapper html5 footer element
    <footer>

        <a href="#">
          <img src={logo} alt="company logo"/>
        </a>


    </footer>
  );
}

export default Footer;
