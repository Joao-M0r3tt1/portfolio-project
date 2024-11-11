import React from 'react';
import './footer.css';

// Import React Scroll
import { Link } from 'react-scroll';

// Import links
import { linksFooter } from '../../Data';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer_container container">
                <h2 className="footer_title">João Moretti <i className='bx bx-bug footer_title-icon'></i></h2>

                <ul className='footer_list'>
                    {linksFooter.map(({ name, path }, index) => {
                        return (
                            <li className="nav_item" key={index}>
                                <Link 
                                    className="footer_link" 
                                    to={path} 
                                    spy={true}
                                    hashSpy={true} 
                                    smooth={true} 
                                    offset={-15} 
                                    duration={100} 
                                    >
                                    {name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="footer_social">
                    <a href="https://www.linkedin.com/in/joão-victor-moretti-a778451a2" className='footer_social-link' target='_blank'>
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    
                    <a href="https://www.instagram.com/joao_moretti__?igshid=NGVhN2U2NjQ0Yg==" className='footer_social-link' target='_blank'>
                        <i className="bx bxl-instagram-alt"></i>
                    </a>
                    
                    <a href="https://www.x.com/joao_moretti_?t=iniN4Zw5uqcni3ciZGk9oA&s=09" className='footer_social-link' target='_blank'>
                        <i className="bx bxl-twitter"></i>
                    </a>

                    <a href="#" className='footer_social-link' target='_blank'>
                        <i className="bx bxl-meta"></i>
                    </a>
                </div>

                <span className='footer_copy'>
                    <span>&#169;Cyb3rH4ck3r</span> - 2023. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer