import React from 'react';

// Import Image
import scrollImg from '../../assets/scroll.svg';

const ScrollDown = () => {
    return (
        <div className='home_scroll'>
            <a href="#about" className='home_scroll-button button_flex'>
                <i className="uil uil-arrow-down home_scroll-arrow"></i>
                <span className='home_scroll-name'>Scroll</span>
                
                <img src={scrollImg} className='home_scroll-mouse wheel' alt="Scroll icon" />

                <span className='home_scroll-name'>Down</span>
                <i className="uil uil-arrow-down home_scroll-arrow"></i>
            </a>
        </div>
    )
}

export default ScrollDown