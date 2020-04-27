import React from 'react';
//must import this footer.js to App.js

import logo from "../../images/logo_footer.png";
import schedule_button from '../../images/schedule_button.png';

//       v must begin w/ capital letter
function Footer() {
  return (
    //wrapper html5 footer element
    <footer>

      <h1>
        Land Your Dream Job

        <img src={schedule_button} alt="schedule button 2"/>
      </h1>

        <a href="home">
          <img src={logo} alt="company logo"/>
        </a>

      <text_w>
        &copy; 2019 All rights reserved.
      </text_w>

    </footer>
  );
}

export default Footer;
