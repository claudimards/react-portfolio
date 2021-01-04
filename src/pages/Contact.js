import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import './Contact.css'

function Contact() {
    return (
        <>
        <Header />
        <section className="contact section" id="contact">
                <h2 className="section-title">Contact</h2>

                <h3 className="warning"><i className='bx bx-tired'></i>Contact form out of work, still in development</h3>

                <h4 className="wpp-info"><a href="https://api.whatsapp.com/send?l=pt_BR&phone=19981828929" target="_blank" className=""><i className='bx bxl-whatsapp' ></i>Click here and get in touch via WhatsApp</a></h4>

                <div className="contact__container bd-grid">
                    <form action="#" className="contact__form">
                        <input name="name" type="text" placeholder="Name" className="contact__input" />
                        <input name="email" type="email" placeholder="Email" className="contact__input" />
                        <input name="subject" type="text" placeholder="Subject" className="contact__input" />
                        <textarea name="message" id="message" cols="0" rows="10" className="contact__input" placeholder="Message..."></textarea>

                        <input type="button" value="Send" className="contact__button button" />
                    </form>
                </div>
            </section>
        <Footer />
        </>
    )
}

export default Contact
