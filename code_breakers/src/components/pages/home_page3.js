import React from 'react';
//must import this js to App.js

import schedule_button from '../../images/schedule_button.png';
import lucy_wang from '../../images/lucy_wang.png';
import mo_luo from '../../images/mo_luo.png';
import dave_wixon from '../../images/dave_wixon.png';
import allen_tran from '../../images/allen_tran.png';

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
        
            <img src={lucy_wang} alt="graduates"/>
            <img src={mo_luo} alt="graduates"/>
            <img src={dave_wixon} alt="graduates"/>
            <img src={allen_tran} alt="graduates"/>



            <h2 id="small_margin">
                We Guarantee Results
            </h2>

            <center>
              <div class="row">
                <div class="column" id="results"> 93%+</div>
                <div class="column" id="results"> 1M+ </div>
                <div class="column" id="results"> 164K </div>
              </div>
              <div class="row">
                <div class="column">Placement Rate</div>
                <div class="column">in new salaries</div>
                <div class="column">Average income</div>
              </div>
            </center>

            <a href="consultation_page">
                <img src={schedule_button} id="padding2" width="500px" alt="schedule button 2"/>
            </a>
      </center>



    </div>
  );
}

export default Homepage3;
