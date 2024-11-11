import React, {useState} from 'react';

// Import Framer Motion - https://www.npmjs.com/package/framer-motion
import { motion } from 'framer-motion';

const ProjectItems = ({ item }) => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <motion.div layout animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0.8, scale: 0.6 }} exit={{ opacity: 0.8, scale: 0.6}} transition={{ duration: 0.3 }} className='project_card' key={item.id}>
            <img src={item.image} alt="Image related to the project" className='project_img'/>
            <h3 className='project_title'>{item.title}</h3>

            <div className='project_content-button'>
                <span className="project_button" onClick={() => toggleTab(1)}>
                    <i className="bx bx-search-alt project_button-icon"></i> Description ...  
                </span>

                <a href={item.url} className="project_button" target='_blank'>
                    <i className="bx bxl-github project_button-icon-git"></i> GitHub <i className="bx bx-right-arrow-alt project_button-icon project_button-icon-arrow"></i>
                </a>
            </div>

            <div className={toggleState === 1 ? 'project_modal active-modal' : 'project_modal'}>
                <div className='project_modal-content'>
                    <i className="uil uil-times-circle project_modal-close" onClick={() => toggleTab(0)}></i>
                            
                    <h3 className='project_modal-title'>{item.title_description}</h3>
                    <p className='project_modal-description'>{item.description}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectItems