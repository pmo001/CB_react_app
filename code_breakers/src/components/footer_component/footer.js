import React from 'react';
//must import this footer.js to App.js

import logo from "../../images/logo_footer.png";
import footer_schedule from '../../images/footer_schedule.png';

//       v must begin w/ capital letter
function Footer() {
  return (
    //wrapper html5 footer element
    <footer>

      <center>
      <h1 id="header_w">
        Land Your Dream Job {"\t"}

        <a href="schedule_consultation">
          <img src={footer_schedule} alt="schedule button footer"/>
        </a>
      </h1>
      </center>

      <center>
        <div class="row">
          <div class="column">
            <a href="home">
              <img src={logo} alt="logo"/>
            </a> 
          </div>
          <div class="column" id="title_w"> INFORMATION </div>
          <div class="column" id="title_w"> COMPANY </div>
        </div>

        <div class="row">
          <div class="column"> 
          </div>
          <div class="column" id="text_w">
            <a href="home" id="text_w">
              Home
            </a>
          </div>
          <div class="column" id="text_w">
            <a href="contact_us" id="text_w">
              Contact Us
            </a>  
          </div>
        </div>

        <div class="row">
          <div class="column">
          </div>

          <div class="column" id="text_w">
            <a href="about_us" id="text_w">
              About Us
            </a>  
          </div>

          <div class="column" id="text_w">
            <a href="reviews" id="text_w">
              Reviews
            </a>  
          </div>
        </div>

        <div class="row">
          <div class="column">
          </div>

          <div class="column" id="text_w">
            <a href="FAQS_page" id="text_w">
              FAQS
            </a>  
          </div>
          
          <div class="column" id="text_w">
            <a href="careers_page" id="text_w">
              Careers
            </a>  
          </div>
        </div>


      </center>



        

      <text_w>
      {"\n"}
      {"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}
       &copy; 2019 All rights reserved.
      </text_w>

    </footer>
  );
}

export default Footer;
