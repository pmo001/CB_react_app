import React from 'react';
//must import this js to App.js

import companies from '../../images/companies.png';


//       v must begin w/ capital letter
function Homepage6() {
  return (
    //wrapper/container html5 element
    <div>

      <h1>
        <center>
          Our Graduates Have Received Offers From:
        </center>
      </h1>
      
      <center>
          
        <img id="padding2" src={companies} alt="company offers"/>

        <p1> {"\n"} And Many More..... {"\n"}</p1>
        <h1></h1>

      </center>



    </div>
  );
}

export default Homepage6;
