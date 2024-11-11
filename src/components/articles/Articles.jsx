import React, {useState} from 'react';
import './articles.css';

// Import Images
import articleImg_1 from '../../assets/work1.jpg';
import articleImg_2 from '../../assets/work2.jpg';
import articleImg_3 from '../../assets/work3.jpg';

const Articles = () => {
    // Opens the modal for each article
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className='articles section' id='articles'>
            <h2 className='section_title'>My Articles</h2>
            <span className='section_subtitle'>Subjects I Wrote About - <a href="#" className='section_subtitle-link'>&#40;Cyb3rH4ck3r&#41;</a> </span>

            <div className='articles_container container grid'>
                <div className='articles_content'>
                    <div>
                        <i className="uil uil-file-shield-alt articles_icon"></i>
                        <h3 className='articles_title'>Product Designer</h3>
                        <span className='articles_data'>october 31, 2023</span>
                    </div>

                    <div className='articles_content-button'>
                        <span className='articles_button' onClick={() => toggleTab(1)}>
                            View More
                            <i className="uil uil-arrow-circle-right articles_button-icon articles_button-icon-animate"></i>
                        </span>

                        <a href="#" className='articles_button'>
                            <i className="uil uil-file-search-alt articles_button-icon"></i> Read in full
                        </a>
                    </div>

                    <div className={toggleState === 1 ? 'articles_modal active-modal' : 'articles_modal'}>
                        <div className='articles_modal-content'>
                            <i className="uil uil-times-circle articles_modal-close" onClick={() => toggleTab(0)}></i>
                            <img src={articleImg_1} className='article_modal-img' alt="Image1" />
                            
                            <h3 className='articles_modal-title'>Product Designer</h3>

                            <p className='articles_modal-description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at ut corrupti perferendis nam ipsam eveniet a dolorem ducimus aperiam, repellat ea, quaerat enim.
                            </p>

                            <ul className='articles_modal-articles grid'>
                                <li className='articles_modal-article'>
                                    <i className="uil uil-check-circle articles_modal-icon"></i>
                                    <p className='articles_modal-info'>Topic One</p>
                                </li>

                                <li className='articles_modal-article'>
                                    <i className="uil uil-check-circle articles_modal-icon"></i>
                                    <p className='articles_modal-info'>Topic Two</p>
                                </li>

                                <li className='articles_modal-article'>
                                    <i className="uil uil-check-circle articles_modal-icon"></i>
                                    <p className='articles_modal-info'>Topic Thre</p>
                                </li>

                                <li className='articles_modal-article'>
                                    <i className="uil uil-document-layout-left articles_modal-icon"></i>
                                    <a href='' className='articles_modal-info'>Click here to read the full article ...</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='articles_content'>
                    <div>
                        <i className="uil uil-file-lock-alt articles_icon"></i>
                        <h3 className='articles_title'>UI/UX Designer</h3>
                        <span className='articles_data'>OCTOBER 31, 2023</span>
                    </div>

                    <div className='articles_content-button'>
                        <span className='articles_button' onClick={() => toggleTab(2)}>
                            View More
                            <i className="uil uil-arrow-circle-right articles_button-icon articles_button-icon-animate"></i>
                        </span>
                         
                        <a href="#" className='articles_button'>
                            <i className="uil uil-file-search-alt articles_button-icon"></i> Read in full
                        </a>
                    </div>

                    <div className={toggleState === 2 ? 'articles_modal active-modal' : 'articles_modal'}>
                        <div className='articles_modal-content'>
                            <i className="uil uil-times-circle articles_modal-close" onClick={() => toggleTab(0)}></i>

                            <img src={articleImg_2} className='article_modal-img' alt="Image1" />
                            
                            <h3 className='articles_modal-title'>UI/UX Designer</h3>
                            <p className='articles_modal-description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at ut corrupti perferendis nam ipsam eveniet a dolorem ducimus aperiam, repellat ea, quaerat enim.
                            </p>

                            <ul className='articles_modal-articles grid'>
                                <li className='articles_modal-article'>
                                    <i className="uil uil-check-circle articles_modal-icon"></i>
                                    <p className='articles_modal-info'>topic one Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </li>

                                <li className='articles_modal-article'>
                                    <i className="uil uil-check-circle articles_modal-icon"></i>
                                    <p className='articles_modal-info'>topic one Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, reiciendis consequuntur.</p>
                                </li>

                                <li className='articles_modal-article'>
                                    <i className="uil uil-check-circle articles_modal-icon"></i>
                                    <p className='articles_modal-info'>topic one Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </li>

                                <li className='articles_modal-article'>
                                    <i className="uil uil-document-layout-center articles_modal-icon"></i>
                                    <a href='' className='articles_modal-info'>Click here to read the full article ...</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='articles_content'>
                    <div>
                        <i className="uil uil-file-search-alt articles_icon"></i>
                        <h3 className='articles_title'>Visual Designer</h3>
                        <span className='articles_data'>OCTOBER 31, 2023</span>
                    </div>

                    <div className='articles_content-button'>
                        <span className='articles_button' onClick={() => toggleTab(3)}>
                            View More
                            <i className="uil uil-arrow-circle-right articles_button-icon articles_button-icon-animate"></i>
                        </span>
                         
                        <a href="#" className='articles_button'>
                            <i className="uil uil-file-search-alt articles_button-icon"></i> Read in full
                        </a>
                    </div>

                    <div className={toggleState === 3 ? 'articles_modal active-modal' : 'articles_modal'}>
                        <div className='articles_modal-content'>
                            <i className="uil uil-times-circle articles_modal-close" onClick={() => toggleTab(0)}></i>
                            
                            <img src={articleImg_3} className='article_modal-img' alt="Image1" />

                            <h3 className='articles_modal-title'>Visual Designer</h3>
                            <p className='articles_modal-description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed at ut corrupti perferendis nam ipsam eveniet a dolorem ducimus aperiam, repellat ea, quaerat enim.
                            </p>

                            <ul className='articles_modal-articles grid'>
                                <li className='articles_modal-article'>
                                    <i className="uil uil-check-circle articles_modal-icon"></i>
                                    <p className='articles_modal-info'>Topic One</p>
                                </li>

                                <li className='articles_modal-article'>
                                    <i className="uil uil-check-circle articles_modal-icon"></i>
                                    <p className='articles_modal-info'>Topic Two</p>
                                </li>

                                <li className='articles_modal-article'>
                                    <i className="uil uil-check-circle articles_modal-icon"></i>
                                    <p className='articles_modal-info'>Topic Thre</p>
                                </li>

                                <li className='articles_modal-article'>
                                    <i className="uil uil-document-layout-right articles_modal-icon"></i>
                                    <a href="" className='articles_modal-info'>Click here to read the full article ...</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles