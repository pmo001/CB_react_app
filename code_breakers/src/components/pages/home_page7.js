import React from 'react';
//must import this js to App.js

import rating from '../../images/rating.png';
import david_amazon_offer from '../../images/david_amazon_offer.png';
import dm_most_recommended from '../../images/dm_most_recommended.png';
import raghav_codebreakers from '../../images/raghav_codebreakers.png';
import abhinav_noncs from '../../images/abhinav_noncs.png';
import mahir_international from '../../images/mahir_international.png';
import ashar_summer from '../../images/ashar_summer.png';
import jm_fall from '../../images/jm_fall.png';
import jun_internship from '../../images/jun_internship.png';
import abdullah_faang from '../../images/abdullah_faang.png';
import alexander_excellent from '../../images/alexander_excellent.png';
import pavan_mentorship from '../../images/pavan_mentorship.png';
import lucy_best from '../../images/lucy_best.png';
import arjun_darek from '../../images/arjun_darek.png';
import emory_bigname from '../../images/emory_bigname.png';
import jasmine_enjoyed from '../../images/jasmine_enjoyed.png';
import dave_noncs from '../../images/dave_noncs.png';
import mo_luo_rev from '../../images/mo_luo_rev.png';
import kevin_coaches from '../../images/kevin_coaches.png';
import allen_tran_rev from '../../images/allen_tran_rev.png';


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
        
        <div class="scroll">
          <img src={david_amazon_offer} alt="reviews"/>
          <img src={dm_most_recommended} alt="reviews"/>
          <img src={raghav_codebreakers} alt="reviews"/>
          <img src={abhinav_noncs} alt="reviews"/>
          <img src={mahir_international} alt="reviews"/>
          <img src={ashar_summer} alt="reviews"/>
          <img src={jm_fall} alt="reviews"/>
          <img src={jun_internship} alt="reviews"/>
          <img src={abdullah_faang} alt="reviews"/>
          <img src={alexander_excellent} alt="reviews"/>
          <img src={pavan_mentorship} alt="reviews"/>
          <img src={lucy_best} alt="reviews"/>
          <img src={arjun_darek} alt="reviews"/>
          <img src={emory_bigname} alt="reviews"/>
          <img src={jasmine_enjoyed} alt="reviews"/>
          <img src={dave_noncs} alt="reviews"/>
          <img src={mo_luo_rev} alt="reviews"/>
          <img src={kevin_coaches} alt="reviews"/>
          <img src={allen_tran_rev} alt="reviews"/>
          

        </div>

      </center>



    </div>
  );
}

export default Homepage6;
