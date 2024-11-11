import React from 'react';
import './achievements.css';

// Import data 
import { data } from '../../Data';

// Swiper
// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import Required Modules
import { Pagination } from 'swiper/modules';

const Achievements = () => {
    return (
        <section className='achievements container section'>
            <h2 className='section_title'>My Achievements</h2>
            <span className='section_subtitle'><span className="span">My</span> Professional Certifications And Badges</span> 

            <Swiper className="achievements_container mySwiper" 
                grabCursor={true}
                spaceBetween={24}
                // loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
                }}
                modules={[Pagination]}
            >
                {data.map(({id, image, title, description}) => {
                    return (
                        <SwiperSlide className='achievements_card' key={id}>
                            <img src={image} alt="Badge A" className='achievements_img'/>
                            <h3 className='achievements_name'>{title}</h3>
                            <p className='achievements_description'>{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
} 

export default Achievements;