import React from 'react';
import "./about.css";
import Info from './Info.jsx';

// Import Images
import AboutImg from '../../assets/about.jpg';
import Curriculum from '../../assets/John-Cv.pdf';
import ImportImg from '../../assets/import.svg';

const About = () => {
    return (
        <section className='about section' id='about'>
            <h2 className='section_title'>About Me</h2>
            <span className='section_subtitle'>A Little About <span className='span'>My Trajectory</span> </span>

            <div className='about_container container grid'>
                <img src={AboutImg} className='about_img' alt="My photo" />

                <div className='about_data'>
                    <Info />

                    <p className='about_description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab est quo sunt facere expedita quis culpa quae repellendus explicabo ex dolor ipsa blanditiis eveniet!
                    </p>

                    <a download="" href={Curriculum} className='button button_flex'>
                        Download C.V.
                        <img src={ImportImg} className='button_icon' alt="Dowload icon" />
                    </a>
                </div>
            </div>

            <div className='section_bg-wrapper'>
                <span className='bg_title'>About</span>
            </div>
        </section>
    )
}

export default About