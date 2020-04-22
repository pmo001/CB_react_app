import React from 'react';

// components
import Header from './components/header_component/header';
import Footer from './components/footer_component/footer';
import Homepage from './components/pages/home_page';


function App() {
  return (
    //wrapping div for all contents
    //class means something else in react, so className
    <div className="App"> 

      <Header / >

      <Homepage / >
      
      <Footer / >

      
    </div>
  );
}

export default App;
