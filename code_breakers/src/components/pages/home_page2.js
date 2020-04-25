import React from 'react';
//must import this js to App.js

import accel_img from '../../images/accel_img.png';
import schedule_button from '../../images/schedule_button.png'

//       v must begin w/ capital letter
function Homepage2() {
  return (
    //wrapper/container html5 element
    <div>

      <h1>
        <center>
          Accelerate Your Career
        </center>
      </h1>
      
      <center>
        <img src={accel_img} alt="accelerate your career summary picture" />
        
        <a href="consultation_page">
            <img id="padding2" src={schedule_button} alt="schedule button 2" />
        </a>
      
      </center>



    </div>
  );
}

export default Homepage2;
