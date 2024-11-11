import React from 'react';

// IMport Images
import handImg from '../../assets/hand.svg';
import sendImg from '../../assets/send.svg';

const Data = () => {
    return (
        <div className='home_data'>
            <p className='home_salutation'>Hello, <span>My Name is</span> </p>
            <h1 className='home_title'>
                <span>João</span> Moretti
                <img src={handImg} className='home_hand' alt="Hand icon" />
            </h1>
            <h3 className='home_subtitle'>Software & Security Engineer</h3>
            <p className='home_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque ex ratione illo velit, placeat, excepturi saepe.</p>

            <a href="#contact" className='button button_flex'>
                Let's Talk
                <img src={sendImg} className='button_icon' alt="Send icon" />
            </a>
        </div>
    )
}

export default Data