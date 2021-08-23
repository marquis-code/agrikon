import React from 'react';
import './App.css';
import Navigation from './component/Navigation';
import Home from './component/Home';
import Produce from './component/Produce'; 
import End from './component/Footer'; 
import IconSlide from './component/IconSlide'; 
import Message from './component/Message';  
import Equipment from './component/Equipment';  
 import Testimonials from './component/Testimonials';  
/*  import Navbar from './component/Navbar';   */

function App() {
  return (
     <div>
       <Navigation />
       <Home /> 
     <Produce /> 
     <Equipment />
       <Testimonials />
        <Message />  
      <IconSlide />
    <End />   
    {/* <Navbar /> */}
     </div>
  );
}

export default App;
