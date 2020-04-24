import React from 'react';
//must import this js to App.js

import body1 from '../../images/body1.png';
import consultation from '../../images/consultation.png';

//       v must begin w/ capital letter
function Homepage() {
  return (
    //wrapper/container html5 element
    //container-fluid from bootstrap
    //<div className="container-fluid">
    //class="center" to center
    <div id="body1_container">

      <img src={body1} width="100%" alt="body1 pic"/>

      <a href="appointment">
        <img src={consultation} alt="consultation button" />
      </a>

      <h1>
        <center>
          What is CodeBreakers?
        </center>
      </h1>
      
      <center>
        <p1>
        
          CodeBreakers is a fully-online training program that provides personalized 1-on-1 coaching to help you get your dream tech job.
          {"\n"} {"\n"}
          
          You don't pay CodeBreakers anything until you get a high-paying salary at a top tech company.
          {"\n"} {"\n"}

        </p1>
      </center>



    </div>
  );
}

export default Homepage;
