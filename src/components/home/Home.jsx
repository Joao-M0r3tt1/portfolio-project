import React from 'react';
import "./home.css";

// Import Components
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import ParticlesComponent from '../particles/ParticlesComponent';

const Home = () => {
    return (
        <section className='home section' id='home'>
            <ParticlesComponent />
            
            <div className='home_container container grid'>
                <div className='home_content grid'>
                    <Social />

                    <div className='home_img'></div>

                    <Data />

                </div>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home