import React from 'react';
import './portfolio.css';

// Import Component
import Projects from './Projects';

const Portfolio = () => {
    return (
        <section className='portfolio section' id='portfolio'>
            <h2 className='section_title'>Portfolio</h2>
            <span className='section_subtitle'><span className="span">My</span> Recent Projects And Articles</span>
                
            <Projects />

            <div className='section_bg-wrapper'>
                <span className='bg_title'>Portfolio</span>
            </div>
        </section>
    )
}

export default Portfolio