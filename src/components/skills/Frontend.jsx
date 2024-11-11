import React from 'react';

// Import data
import { skillsFront1 } from '../../Data';
import { skillsFront2 } from '../../Data';

const Frontend = () => {
    return (
        <div className='skills_content'>
            <h3 className='skills_title'>Front-end Developer</h3>

            <div className='skills_box'>
                <div className='skills_group'>
                    {skillsFront1.map(({ icon, name, level }, index) => {
                        return (
                            <div className='skills_data' key={index}>
                                <i className={`bx ${icon}`}></i>

                                <div className=''>
                                    <h3 className='skills_name'>{name}</h3>
                                    <span className='skills_level'>{level}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className='skills_group'>
                    {skillsFront2.map(({ icon, name, level }, index) => {
                        return (
                            <div className='skills_data' key={index}>
                                <i className={`bx ${icon}`}></i>

                                <div className=''>
                                    <h3 className='skills_name'>{name}</h3>
                                    <span className='skills_level'>{level}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Frontend