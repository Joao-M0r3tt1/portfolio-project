import React from 'react';

// Import data 
import { skillsTechnologies1 } from '../../Data';
import { skillsTechnologies2 } from '../../Data';

const Technologies = () => {
    return (
        <div className='skills_content'>
            <h3 className='skills_title'>Technologies</h3>

            <div className='skills_box'>
                <div className='skills_group'>
                    {skillsTechnologies1.map(({ icon, name, level }, index) => {
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
                    {skillsTechnologies2.map(({ icon, name, level }, index) => {
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

export default Technologies