import React from 'react';
//must import this js to App.js

import rating from '../../images/rating.png'

//       v must begin w/ capital letter
function Homepage6() {
  return (
    //wrapper/container html5 element
    <div>

      <h2>
        <center>
          See What Others Are Saying About CodeBreakers
        </center>
      </h2>
      
      <center>
          
        <img src={rating} alt="star rating" />
        
        <text2> {"\n"} Based on </text2>
        <text> 
          <a href="reviews">
            <u style={{color: "black"}}>
            <span style={{color: "black"}}>
              21 reviews 
            </span>
            </u>
          </a>
          </text>
        <text> on &#9733; Trustpilot </text>
        

      </center>



    </div>
  );
}

export default Homepage6;
