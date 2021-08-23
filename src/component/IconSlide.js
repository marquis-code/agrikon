import React from 'react';
import envato1 from '../images/envato1.png';
import envato2 from '../images/envato2.png';
import envato3 from '../images/envato3.png';
import envato4 from '../images/envato4.png';
import envato5 from '../images/envato5.png';

const IconSlide = () => {
   return(
       <div className="slider">
          <div><img src={envato1} alt=""/></div>
          <div><img src={envato2} alt=""/></div>
          <div><img src={envato3} alt=""/></div>
          <div><img src={envato4} alt=""/></div>
          <div><img src={envato5} alt=""/></div>
       </div>
   )
}

export default IconSlide;