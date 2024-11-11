import React, { useRef } from 'react';
import './contact.css';

// Imaport Image
import sendImg from '../../assets/send.svg';

// Email Js - https://www.emailjs.com/
import emailjs from '@emailjs/browser';

const Contact = () => {
    // Logic for sending email
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        e.target.reset()
        .done(function () {
            alert('Your mail is sent!');
        })
        .fail(function () {
            alert('Oops... Erro:' + error.text + 'Send your message via a social network!');
        });
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Contact Me</h2>
            <span className="section_subtitle"><span className="span">Get in Touch</span> And Find Out More</span>

            <div className="contact_container container grid">
                <div className="contact_content">
                    <h3 className="contact_title">Talk to me</h3>

                    <div className="contact_info">
                        <div className="contact_card">
                            <i className="bx bx-mail-send contact_card-icon"></i>

                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">joaomorettijv@gmail.com</span>

                            <a href="mailto:joaomorettijv@gmail.com" className="contact_button">
                                Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-whatsapp contact_card-icon"></i>

                            <h3 className="contact_card-title">WhatsApp</h3>
                            <span className="contact_card-data">+55 &#40;11&#41; 9 6373-3791</span>

                            <a href="https://api.whatsapp.com/send?phone=+5511963733791&text=Hello João Moretti, more information please!" className="contact_button" target='_blank'>
                                Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-linkedin-square contact_card-icon"></i>

                            <h3 className="contact_card-title">Linkedin</h3>
                            <span className="contact_card-data">João Victor Moretti</span>

                            <a href="https://www.linkedin.com/in/joão-victor-moretti-a778451a2" className="contact_button" target='_blank'>
                                Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-instagram contact_card-icon"></i>

                            <h3 className="contact_card-title">Direct</h3>
                            <span className="contact_card-data">@joao_moretti__</span>

                            <a href="https://www.instagram.com/joao_moretti__?igshid=NGVhN2U2NjQ0Yg==" className="contact_button" target='_blank'>
                                Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact_content">
                    <h3 className="contact_title">State the subject</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact_form">
                        <div className="contact_form-div">
                            <label htmlFor="name" className="contact_form-tag">Name</label>
                            <input type="text" name='name' id='name' className="contact_form-input" placeholder='Insert your name...'/>
                        </div>

                        <div className="contact_form-div">
                            <label htmlFor="email" className="contact_form-tag">Mail</label>
                            <input type="email" name='email' id='email' className="contact_form-input" placeholder='Insert your email...'/>
                        </div>

                        <div className="contact_form-div contact_form-area">
                            <label htmlFor="compose" className="contact_form-tag">Compose email</label>
                            <textarea name="compose" id='compose' cols="30" rows="10" className='contact_form-input' placeholder='Discuss the topic...'></textarea>
                        </div>

                        <button className='button button_flex'>
                            Send Message <img src={sendImg} className='button_icon' alt="Send icon" />
                        </button>
                    </form>
                </div>
            </div>

            <div className='section_bg-wrapper-contact'>
                <span className='bg_title'>Contact</span>
            </div>
        </section>
    )
}

export default Contact