import React from 'react';
import agrikonLogo from '../images/agrikonLogo.png';
import message from '../images/message.png';
import location from '../images/location.png';
import telephone from '../images/telephone.png';

const End = () => {
  return (
       <div>
              <div  className="footer">
                  <div className="footer-item1">
                        <img src={agrikonLogo} alt=""/> <span>agrikon</span><br /><br />
                        <p>There are many variations of passages<br /> of lorem ipsum available, but the<br /> majority suffered.</p>
                        <input type="email" id="icon" style={{textIndent:"17px"}}  placeholder="Email Address"  />
                     </div>

                     <div className="footer-item2">
                     <h5>Links</h5>
                     <p>Our Projects</p>
                     <p>About Us</p>
                     <p>New Campaign</p>
                     <p>Upcoming Events</p>
                     <p>Volunteers</p>
                     </div>

                     <div className="footer-item3">
                        <h5>News</h5>
                        <div className="box1-parent">
                        <div className="box1"></div> 
                           <div>                    
                              <p id="date">Nov, 16th 2020</p> 
                              <p id="footerText">How to grow vegetables<br /> in the farm</p>
                           </div>
                        </div>

                     <div className="box2-parent">
                        <div className="box2"></div>
                           <div>
                              <p id="date">Nov, 16th 2020</p> 
                              <p id="footerText">How to grow vegetables<br /> in the farm</p>
                           </div>
                     </div>
                     </div>

                     <div className="footer-item4">
                        <h5>Contact</h5>
                        <p> <img src={telephone} alt=""/> 666 888 0000</p> <hr />
                        <p> <img src={message} alt=""/> needhelp@company.com</p><hr />
                        <p> <img src={location} alt=""/> 80 broklyn golden street line<br /> New York, USA.</p>
                  </div>
              </div>
            <div className="footer-item5">
              {/*     <div className="footer-item-text"> */}
                        <div id="footer-item5T1"><p>© Copyright 2020 by Company.com</p></div>
                        <div id="footer-item5T2" ><p>Terms & Conditions / Privacy Policy / Sitemap</p> </div>
             {/*      </div> */}
              </div>   
       </div>
  );
}

export default End;