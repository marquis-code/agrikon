import React from 'react';
import agrikonTestimony3 from '../images/agrikonTestimony3.png';
import agrikonTestimony2 from '../images/agrikonTestimony2.png';
import agrikonTestimony1 from '../images/agrikonTestimony1.png';
 import home from '../images/home.PNG'; 
import agrikonCow from '../images/agrikonCow.png'; 
import agrikonLogo from '../images/agrikonLogo.png';
import agrikonFlowers from '../images/agrikonFlowers.png';
import agrikonGrassesFarm from '../images/agrikonGrassesFarm.png'; 

const Testimonials = () => {
  return (
      <div className="testimony-parent">
          <div id="testimonials"><h4>TESTIMONIALS</h4></div>
            <div className="testimony-message1">
              <p id="testimonialP1">This is due to their excellent service, competitive pricing and customer support.<br />
              It’s throughly refresing to get such a personal touch. Duis aute lorem ipsum is <br />
              simply free text irure dolor in reprehenderit in esse nulla pariatur.</p>
            </div>
            <div className="testimony">
              <div className="testimony1"><img src={agrikonTestimony3} alt=""/></div>
              <div className="testimony2"><img src={agrikonTestimony2} alt=""/></div>
              <div className="testimony3"><img src={agrikonTestimony1} alt=""/></div>
          </div>
          <div className="testimony-message">
              <h3 style={{fontSize:"20px"}}>Jessica Brown</h3>
              <p id="testimonialP2">Customer</p>
          </div>
  <div className="produce-display-parent">
       
          <div className="width80">
          <div className="produce-display-child1">
               <div className="produce-display-child1-text1">
                   <img id="produce-display-child1-image" src={agrikonLogo} alt=""/>
                   <p id="produce-display-child1-ps">FROM THE BLOG POST</p>
                   <h3 id="produceH3">Latest News & Articles <br /> Directly from Blog</h3>
               </div>
               <div className="produce-display-child1-text2">
                   <p id="produce-display-child1-p">
                        Lorem ipsum is simply free text available. Aenean eu leo quam.<br /> 
                        Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean<br /> 
                        lacinia bibendum nulla sed consectetur.
                   </p>
               </div>
           </div> 

           <div className="produce-display-child2">
               <div className="produce-display-child2-card1">
                    <img id="produceImage1" src={agrikonFlowers} alt=""/>
                    <p style={{textAlign:"center", fontSize:"10px"}}> by Admin  2 Coments</p>
                    <h6 style={{textAlign:"center", color:"green"}}>Best Way to Do Eco and Agriculture</h6>
                    <input type="button" className="produce-button-card" value="Discover More" />
               </div>
               <div className="produce-display-child2-card2">
                  <img id="produceImage2" src={agrikonCow} alt=""/>
                   <p style={{textAlign:"center", fontSize:"10px"}}> by Admin  2 Coments</p>
                   <h6 style={{textAlign:"center", color:"green"}}>Best Way to Do Eco and Agriculture</h6>
                   <input type="button" className="produce-button-card" value="Discover More" />
               </div>
               <div className="produce-display-child2-card3">
                  <img id="produceImage3" src={agrikonGrassesFarm} alt=""/> 
                   <p style={{textAlign:"center", fontSize:"10px"}}> by Admin  2 Coments</p>
                   <h6 style={{textAlign:"center", color:"green"}}>Best Way to Do Eco and Agriculture</h6>
                   <input type="button" className="produce-button-card" value="Discover More" />
               </div>
           </div> 
 <hr />
           <div className="produce-display-child3">
               <div className="produce-display-child3-text1">
                   <h5 id="produce-display-child3H5">We Care About Our Agriculture Growth</h5>
                   <p id="produce-display-child3P" style={{fontSize:"10px"}}>
                       There are many variations of passages of Lorem Ipsum available, but the majority<br />
                       have suffered in some form, by injected humour words.
                    </p>
                    <img id="home-image" src={home} alt="" width="300px" height="100px"/>
               </div>
               <div>
                   <div id="produce-display-child3-card1"></div>
               </div> 
                <div>
                   <div className="produce-display-child3-card"></div>
               </div> 
           </div>
          </div> 
    </div>  
</div>
  );
}

export default Testimonials;