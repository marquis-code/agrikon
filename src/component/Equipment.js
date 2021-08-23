import React from 'react';
import agrikonFork from '../images/agrikonFork.png';
import agrikonLogo from '../images/agrikonLogo.png';
import agrikonGrass from '../images/agrikonGrass.png';
import agrikonTractor from '../images/agrikonTractor.png';
import agrikonYellowCircle from '../images/agrikonYellowCircle.png';

const Equipment = () => {
  return (
       <div className="equipment">
           <div className="yellowCirclePosition">
                  <img src={agrikonYellowCircle} id="yellowCircle" alt=""/>
                  <div id="yellowText">
                         <div className="text">
                            <span id="yellowText1">TRUSTED BY</span>
                            <h5 id="yellowText2">8900</h5>
                        </div>
                  </div> 
              </div>
          <div className="equipmentImage">
            <img src={agrikonTractor} id="tractorImage" alt=""/>
          </div>
          <div className="equipmentCard">
             <div className="equipmentCardText">
                <img src={agrikonLogo} alt=""/>
                  <br />
                  <br />
                  <p id="homeP1E">WELCOME TO AGRICON</p>
                  <h3 id="homeH1E">Better Agriculture for <br /> Better Future</h3>
                  <p id="homeP2E">We have 30 years of agriculture & eco <br />farming experience globaly</p>
                  <p id="homePC">
                      There are many variations of passages of lorem ipsum available 
                      <br />but the majority have suffered alteration in some form by 
                      <br />injected humor or random word which don't look even.
                    </p>
                  <div className="icons">
                      <div className="agrikonFork">
                        <div>
                        <img src={agrikonFork} height="40px" width="40px" alt=""/>
                        </div>
                        <div>
                        <p style={{fontSize:"10px", color:"green"}}> Professional <br /> Farmers</p>
                        </div>
                      </div>
                    <div className="agrikonGrass">
                        <div >
                            <img src={agrikonGrass} height="40px" width="40px" alt=""/>
                        </div>
                        <div>
                        <p style={{fontSize:"10px", color:"green"}}> Organic & Eco <br /> Solutions</p>
                        </div>
                    </div>
                  </div>
             </div>
          </div>
       </div>
  );
}

export default Equipment;