import React from 'react';

//import css file
import './style.css';

// components
import Header from './components/header_component/header';
import Footer from './components/footer_component/footer';
import Homepage from './components/pages/home_page';
import Homepage2 from './components/pages/home_page2';
import Homepage3 from './components/pages/home_page3';
import Homepage4 from './components/pages/home_page4';
import Homepage5 from './components/pages/home_page5';
import Homepage6 from './components/pages/home_page6';
import Homepage7 from './components/pages/home_page7';


function App() {
  return (
    //wrapping div for all contents
    //class means something else in react, so className
    <div className="App"> 

      <Header / >

      <Homepage / >
      <Homepage2 / >
      <Homepage3 / >
      <Homepage4 / >
      <Homepage5 / >
      <Homepage6 / >
      <Homepage7 / >
      
      <Footer / >

      
    </div>
  );
}

export default App;
