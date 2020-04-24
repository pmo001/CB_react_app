import React from 'react';
//must import this js to App.js

import body1 from '../../images/body1.png';

//       v must begin w/ capital letter
function Homepage() {
  return (
    //wrapper html5 footer element
    //container-fluid from bootstrap
    //<div className="container-fluid">
    <div id="body1">

    <img src={body1} alt="body1 pic"/>

    </div>
  );
}

export default Homepage;
