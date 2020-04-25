import React from 'react';
//must import this js to App.js

import schedule_button from '../../images/schedule_button.png'

//       v must begin w/ capital letter
function Homepage3() {
  return (
    //wrapper/container html5 element
    <div>

      <h2>
        <center>
          Tested Methodologies With Proven Results
        </center>
      </h2>
      
      <center>
            <p2>
              Does CodeBreakers work? Here's just what a few of our graduates are saying
            </p2>
        
            <h1>
                We Guarantee Results
            </h1>

            <a href="consultation_page">
                <img src={schedule_button} alt="schedule button 2"/>
            </a>
      </center>



    </div>
  );
}

export default Homepage3;
