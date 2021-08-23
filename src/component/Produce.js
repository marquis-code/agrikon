import React from 'react';
import agrikonOrange from '../images/agrikonOrange.png';
import agrikonCow from '../images/agrikonCow.png';
import agrikonGreen from '../images/agrikonGreen.png';

const Produce = () => {
    return (
            <div className="flex-container">
                <div className="flex-item1">
                    <img src={agrikonOrange} id="child1" alt="agrikon background" />
                    <p id="produceP1" style={{ textAlign: "center" }}>Agriculture Leader</p>
                </div>
                <div className="flex-item2">
                    <img src={agrikonCow} id="child2" alt="agrikon background" />
                    <p id="produceP2" style={{ textAlign: "center" }}>Quality Standards</p>
                </div>
                <div className="flex-item3">
                      <img src={agrikonGreen} id="child3" alt="agrikon background" />
                      <p id="produceP3" style={{ textAlign: "center" }}>Organic Services</p>
                </div>
            </div>
    )
}

export default Produce;
