import React, { useEffect, useState } from "react";
import "./header.css";

// Import links
import { linksHeader } from "../../Data";

// Import React Scroll - https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";

// Toggle Theme
const getStorageTheme = () => {
    let theme = 'dark-theme';

    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
};

const Header = () => {
    // Change Background Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector('.header')

        // When the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
        if (this.scrollY >= 80) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header');
    });

    // Toggle Menu
    const[Toggle, showMenu] = useState(false);

    // Toggle Theme
    const[theme, setTheme] = useState(getStorageTheme());
    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav_logo"><i className='bx bx-bot nav_logo-icon'></i> Cyb3r H4ck3r</a>
                
                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        {linksHeader.map(({ name, icon, path }, index) => {
                            return (
                                <li className="nav_item" key={index}>
                                    <Link 
                                        className="nav_link" 
                                        to={path} 
                                        spy={true}
                                        hashSpy={true} 
                                        smooth={true} 
                                        offset={-15} 
                                        duration={100} 
                                        onClick={() => showMenu(!Toggle)}
                                        >
                                        <i className={`uil ${icon} nav_icon`}></i> {name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>

                    <div className="nav_theme" onClick={toggleTheme}>
                        {theme === 'light-theme' ? <i className="uil uil-moon nav_theme-icon icon-moon"></i> : <i className="uil uil-sun nav_theme-icon icon-sun"></i>}
                    </div>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header