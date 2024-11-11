import React from 'react';
import './skills.css';

// Import Components
import Frontend from './Frontend';
import Backend from './Backend';
import Security from './Security';
import Technologies from './Technologies';

const Skills = () => {
    return (
        <div className='skills section' id='skills'>
            <h2 className='section_title'>My Skills</h2>
            <span className='section_subtitle'><span className="span">My</span> Technical Level</span>

            <div className='skills_container container grid'>
                <Frontend />
                <Backend />
                <Security />
                <Technologies />
            </div>

            <div className='section_bg-wrapper'>
                <span className='bg_title'>Skills</span>
            </div>
        </div>
    )
}

export default Skills