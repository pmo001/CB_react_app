import React from 'react';
//must import this js to App.js

import quote_button from '../../images/quote_button.png';

//       v must begin w/ capital letter
function Homepage5() {
  return (
    //wrapper/container html5 element
    <div>
    
      <center>
      <a href="quote">
        <img src={quote_button} alt="get a quote button"/>
      </a>
      </center>

      <h1 id="small_margin">
        <center>
        {"\n"}
          How We Work
        </center>
      </h1>
      
      <center>
          
        <p1>
            To get an amazing developer role, classroom lectures is not enough, you need an immersive and interactive environment. Codebreaker provides practical action steps, pattern recognition, community & network and personalized mentorship.
        </p1>

        
        
        <div class="row">
          <div class="biColumn_descr" id="left">
            
            <text id="title1">
            Practical Action Steps {"\n"}
            </text>

            <p2>
            Getting a top-tier tech job is not easy and can seem like a mountain to climb. To make the process more manageable, we've broken down the process into clear weekly action items.
            </p2>
          </div>
          <div class="biColumn_descr" id="right">
            
            <text id="title1">
            Pattern Recognition {"\n"}
            </text>
            
            <p2>
            Every technical interview question you face will fall into one of several patterns. Through our mentorship, we train you to recognize the types of problems you might encounter.
            </p2>          
          </div>
        </div>

        <div class="row">
          <div class="biColumn_descr" id="left">
            
            <text id="title1">
            Community & Network {"\n"}
            </text>

            <p2>
              There are lots of CodeBreakers mentees working towards the same goal as you and we encourage collaboration. Our network of mentors/mentees spans over 30 top tech companies across the country and is only growing.
            </p2>
          </div>
          <div class="biColumn_descr" id="right">
            
            <text id="title1">
            Personalized Mentorship {"\n"}
            </text>
            
            <p2>
              Preparing for interviews is difficult, especially on your own. To keep you on track, we provide weekly check-ins, personal Q&A's sessions, unlimited office hours, and mock interviews with our mentors (all are from FAANG companies).
            </p2>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Homepage5;
