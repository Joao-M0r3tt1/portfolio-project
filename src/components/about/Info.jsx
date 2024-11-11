import React from 'react';

const Info = () => {
    return (
        <div className='about_info grid'>
            <div className='about_box'>
                <i className='bx bxs-award about_icon'></i>
                <h3 className='about_title'>Experience</h3>
                <span className='about_subtitle'>3 Years Studying</span>
            </div>

            <div className='about_box'>
                <i className='bx bx-medal about_icon' ></i>
                <h3 className='about_title'>Completed</h3>
                <span className='about_subtitle'>Projects</span>
            </div>

            <div className='about_box'>
                <i className='bx bxs-terminal about_icon'></i>
                <h3 className='about_title'>Support</h3>
                <span className='about_subtitle'>Online 24/07</span>
            </div>
        </div>
    )
}

export default Info