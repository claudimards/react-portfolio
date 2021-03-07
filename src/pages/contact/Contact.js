import React from 'react'
import emailjs from 'emailjs-com'
import { Link } from 'react-router-dom'
import './Contact.css'
import sr from '../../components/scrollreveal/ScrollReveal'

function Contact() {

    const config = {
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    }
    sr.reveal('.contact__input', {interval: 200}, config)

    const sendEmail = (e) => {
        const loaderIcon = document.querySelector( '.loader' )
        loaderIcon.classList.toggle( 'active-load' )
        
        const status = document.querySelector( '.status' )

        e.preventDefault();
    
        emailjs.sendForm('email-js-service', 'adevindev-site', e.target, 'user_BplUStcvILWFOcGjxH42G')
          .then((result) => {
              //console.log(result.text);
              e.target.reset()
              loaderIcon.classList.toggle( 'active-load' )
              status.classList.toggle( 'success' )
              setInterval(() => {
                status.classList.add( 'fade' )
              }, 500);
          }, (error) => {
              //console.log(error.text);
              loaderIcon.classList.toggle( 'active-load' )
              status.classList.toggle( 'error' )
              setInterval(() => {
                status.classList.add( 'fade' )
              }, 500);
          });
    }    

    return (
        <section className="contact section" id="contact">
                <h2 className="section-title">Contact</h2>

                <h4 className="wpp-info"><Link to={'//api.whatsapp.com/send?l=pt_BR&phone=5519981828929'} target="_blank" className=""><i className='bx bxl-whatsapp' ></i>Clique aqui e mande uma mensagem WhatsApp</Link></h4>
                <h3 className="wpp-info">Ou se preferir</h3>

                <h3 className="wpp-info">Entre em contato por e-mail</h3>

                <div className="contact__container bd-grid">
                    <form onSubmit={sendEmail} className="contact__form">
                        <input name="name" type="text" placeholder="Nome" className="contact__input" required />
                        <input name="email" type="email" placeholder="Email" className="contact__input" required />
                        <input name="subject" type="text" placeholder="Assunto" className="contact__input" required />
                        <textarea name="message" id="message" cols="0" rows="10" className="contact__input" placeholder="Mensagem..." required></textarea>

                        <div className="loader">
                            <i className='bx bx-loader-circle' ></i>
                        </div>
                        <input type="submit" value="Enviar" className="contact__button button" />

                        <div className="status" hidden>
                            <p className="status-text-success"><i className='bx bx-check-double'></i>E-mail enviado</p>
                            <p className="status-text-error"><i className='bx bx-error-circle'></i>E-mail não enviado</p>
                        </div>
                    </form>
                </div>
            </section>
    )
}

export default Contact
