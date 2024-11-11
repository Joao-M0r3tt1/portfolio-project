import React, {useState} from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className='qualification section' id='qualification'>
            <h2 className='section_title'>Qualifications</h2>
            <span className='section_subtitle'><span className="span">My</span> Personal Journey</span>

            <div className='qualification_container container'>
                <div className='qualification_tabs'>
                        <div className={toggleState === 1 ? 'qualification_button qualification_active button_flex' : 'qualification_button button_flex'} onClick={() => toggleTab(1)}>
                            <i className='uil uil-graduation-cap qualification_icon'></i>
                            Education
                        </div>

                        <div className={toggleState === 2 ? 'qualification_button qualification_active button_flex' : 'qualification_button button_flex'} onClick={() => toggleTab(2)}>
                            <i className='uil uil-desktop qualification_icon'></i>
                            Experience
                        </div>

                        <div className={toggleState === 3 ? 'qualification_button qualification_active button_flex' : 'qualification_button button_flex'} onClick={() => toggleTab(3)}>
                            <i className='uil uil-medal qualification_icon'></i>
                            Certifications
                        </div>

                        <div className={toggleState === 4 ? 'qualification_button qualification_active button_flex' : 'qualification_button button_flex'} onClick={() => toggleTab(4)}>
                            <i className='uil uil-award qualification_icon'></i>
                            Badges
                        </div>
                </div>

                <div className='qualification_sections'>
                        <div className={toggleState === 1 ? 'qualification_content qualification_content-active' : 'qualification_content'}>
                            <div className='qualification_data'>
                                <div className="">
                                    <h3 className="qualification_title">Web Design</h3>
                                    <span className="qualification_subtitle">
                                        Spain - Institute
                                    </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-schedule"></i> 2021 - Present
                                    </div>
                                </div>

                                <div className="">
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>  

                            <div className='qualification_data'>
                                <div></div>

                                <div className="">
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>

                                <div className="">
                                    <h3 className="qualification_title">Art Director</h3>
                                    <span className="qualification_subtitle">
                                        Spain - Institute
                                    </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-schedule"></i> 2020 - 2021
                                    </div>
                                </div>
                            </div> 

                            <div className='qualification_data'>
                                <div className="">
                                    <h3 className="qualification_title">Web Development</h3>
                                    <span className="qualification_subtitle">
                                        Spain - Institute
                                    </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-schedule"></i> 2018 - 2020
                                    </div>
                                </div>

                                <div className="">
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>  

                            <div className='qualification_data'>
                                <div></div>

                                <div className="">
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>

                                <div className="">
                                    <h3 className="qualification_title">UX Expert</h3>
                                    <span className="qualification_subtitle">
                                        Spain - Institute
                                    </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-schedule"></i> 2017 - 2018
                                    </div>
                                </div>
                            </div>                 
                        </div>

                        <div className={toggleState === 2 ? 'qualification_content qualification_content-active' : 'qualification_content'}>
                            <div className='qualification_data'>
                                <div className="">
                                    <h3 className="qualification_title">Product Designer</h3>
                                    <span className="qualification_subtitle">
                                        Microsoft - Spain
                                    </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-schedule"></i> 2021 - Present
                                    </div>
                                </div>

                                <div className="">
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>  

                            <div className='qualification_data'>
                                <div></div>

                                <div className="">
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>

                                <div className="">
                                    <h3 className="qualification_title">UX Designer</h3>
                                    <span className="qualification_subtitle">
                                        Apple - Spain 
                                    </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-schedule"></i> 2020 - 2021
                                    </div>
                                </div>
                            </div> 

                            <div className='qualification_data'>
                                <div className="">
                                    <h3 className="qualification_title">Web Designer</h3>
                                    <span className="qualification_subtitle">
                                        Figma - Spain
                                    </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-schedule"></i> 2018 - 2020
                                    </div>
                                </div>

                                <div className="">
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>  
                
                        </div>

                        <div className={toggleState === 3 ? 'qualification_content qualification_content-active' : 'qualification_content'}>
                            <div className='qualification_data'>
                                <div className="">
                                    <h3 className="qualification_title">To aqui Certif.</h3>
                                    <span className="qualification_subtitle">
                                        Spain - Institute
                                    </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-schedule"></i> 2021 - Present
                                    </div>
                                </div>

                                <div className="">
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>  

                            <div className='qualification_data'>
                                <div></div>

                                <div className="">
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>

                                <div className="">
                                    <h3 className="qualification_title">Art Director</h3>
                                    <span className="qualification_subtitle">
                                        Spain - Institute
                                    </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-schedule"></i> 2020 - 2021
                                    </div>
                                </div>
                            </div> 

                            <div className='qualification_data'>
                                <div className="">
                                    <h3 className="qualification_title">Web Development</h3>
                                    <span className="qualification_subtitle">
                                        Spain - Institute
                                    </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-schedule"></i> 2018 - 2020
                                    </div>
                                </div>

                                <div className="">
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>  

                            <div className='qualification_data'>
                                <div></div>

                                <div className="">
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>

                                <div className="">
                                    <h3 className="qualification_title">UX Expert</h3>
                                    <span className="qualification_subtitle">
                                        Spain - Institute
                                    </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-schedule"></i> 2017 - 2018
                                    </div>
                                </div>
                            </div>                 
                        </div>

                        <div className={toggleState === 4 ? 'qualification_content qualification_content-active' : 'qualification_content'}>
                            <div className='qualification_data'>
                                <div className="">
                                    <h3 className="qualification_title">To aqui Badge</h3>
                                    <span className="qualification_subtitle">
                                        Microsoft - Spain
                                    </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-schedule"></i> 2021 - Present
                                    </div>
                                </div>

                                <div className="">
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>  

                            <div className='qualification_data'>
                                <div></div>

                                <div className="">
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>

                                <div className="">
                                    <h3 className="qualification_title">UX Designer</h3>
                                    <span className="qualification_subtitle">
                                        Apple - Spain 
                                    </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-schedule"></i> 2020 - 2021
                                    </div>
                                </div>
                            </div> 

                            <div className='qualification_data'>
                                <div className="">
                                    <h3 className="qualification_title">Web Designer</h3>
                                    <span className="qualification_subtitle">
                                        Figma - Spain
                                    </span>
                                    <div className="qualification_calendar">
                                        <i className="uil uil-schedule"></i> 2018 - 2020
                                    </div>
                                </div>

                                <div className="">
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>
                            </div>  
                
                        </div>
                </div>
            </div>

            <div className='section_bg-wrapper'>
                <span className='bg_title'>Journey</span>
            </div>
        </section>
    )
}

export default Qualification