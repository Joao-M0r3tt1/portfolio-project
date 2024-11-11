import React from 'react';

// Import data
import { skillsSecurity1 } from '../../Data';
import { skillsSecurity2 } from '../../Data';

const Security = () => {
    return (
        <div className='skills_content'>
            <h3 className='skills_title'>Security</h3>

            <div className='skills_box'>
                <div className='skills_group'>
                    {skillsSecurity1.map(({ icon, name, level }, index) => {
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
                    {skillsSecurity2.map(({ icon, name, level }, index) => {
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

export default Security