import React from 'react';

import agrikonLogo from '../images/agrikonLogo.png';
import agrikonGirl from '../images/agrikonGirl.png';

const Message = () => {
  return (
       <div className="message">
          <div className="messageItem1">
          <img src={agrikonGirl} alt="" width="300px" height="300px"/>
          </div>
          <div className="messageItem2">
              <img src={agrikonLogo} alt=""  width="20" height="24"/> <br /><br />
              <p>CONTACT NOW</p>
              <h1 id="messageH1">Leave Us A Message</h1>
              <p id="messageP1">Lorem ipsum dolor sit amet,<br /> consectetur notted adipisicing <br />elit sed do eiusmod tempor incididunt<br /> ut labore et dolore magna aliqua lonm <br />andhn. Aenean tincidunt.</p>
          </div>
           <div className='message-form'>
              <input type="text" placeholder="Full Name"/><br /><br />
              <input type="email" placeholder="Email Address"/><br /><br />
              <input type="number" placeholder="Phone Number"/><br /><br />
              <textarea placeholder="Enter Message" cols="22" rows="5"/><br /><br />
              <input type="submit" className="message-button" value="Send Message" />
           </div>  
       </div>
  );
}

export default Message;