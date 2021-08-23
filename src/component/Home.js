import React from 'react';
import '../styles/Style.css';
import agrikonBackground from '../images/agrikonBackground.png';

const Home = () => {
  return (
    <header className="home">
    {/*     <video  autoPlay muted>
        <source src={video} type="video/mp4"/>
      </video>  */}
       <img src={agrikonBackground} alt="agrikon background" id="image"/>  

      <section className='home-text'>
          <div> <p id="homePC1" >WELCOME TO <br />AGRICULTURE FORM</p></div>
          <div><h1 id="homeHC">Agriculture <br /> &  Eco Farming</h1></div>
          <div><p id="homePC2">There are many of passages of lorem Ipsum, but the majori have suffered alteration in some form.</p></div>
          <div><input type="button" id="homeButton" value="Discover More" /></div>
      </section>  
  </header>
  /*      <div className="home">
            <div > 
            <img src={agrikonBackground} alt="agrikon background" id="image"/> 
         </div> 
           <div className='home-text'>
              <div> <p id="homePC1" >WELCOME TO <br />AGRICULTURE FORM</p></div>
              <div><h1 id="homeHC">Agriculture <br /> &  Eco Farming</h1></div>
              <div><p id="homePC2">There are many of passages of lorem Ipsum, but the majori have suffered alteration in some form.</p></div>
              <div><input type="button" id="homeButton" value="Discover More" /></div>
           </div>  
       </div> */
  );
}

export default Home;