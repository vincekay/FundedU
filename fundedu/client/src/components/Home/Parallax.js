import React from 'react';
import Tab from './Tab';
import Contact from './Contact';
import '../../App.css';



const Parallax = () => {

    const classRoom = require('../../img/class.jpg');
    const hand = require('../../img/hand.jpg');

    return (
        <div>
            <div className="parallax-container">
                <div className="parallax">
                    <img src={classRoom} alt="" className="responsive-img" />
                </div>
            </div>
            <Tab />

            <div className="parallax-container">
                <div className="parallax">
                    <img src={hand} alt="" className="responsive-img" />
                </div>
            </div>

            <Contact />

        </div>
    );
}

export default Parallax;