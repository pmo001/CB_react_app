import React from 'react';
//must import this footer.js to App.js

import logo from "../../images/mainLogo.png";

//       v must begin w/ capital letter
function Footer() {
  return (
    //wrapper html5 footer element
    <footer>
        make logo hyperlink

        <img src={logo} alt="company logo"/>


    </footer>
  );
}

export default Footer;
