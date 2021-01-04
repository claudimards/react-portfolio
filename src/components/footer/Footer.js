import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__title">Claudimar</p>

            <div className="footer__social">
                <Link to={'//www.facebook.com/claudimardossantos.bezerra.1/'} target="_blank" className="footer__icon"><i className='bx bxl-facebook'></i></Link>
                <Link to={'//www.instagram.com/claudimards/'} target="_blank" className="footer__icon"><i className='bx bxl-instagram' ></i></Link>
                <Link to={'//api.whatsapp.com/send?l=pt_BR&phone=5519981828929'} target="_blank" className="footer__icon"><i className='bx bxl-whatsapp' ></i></Link>
            </div>

            <p>&#169; 2020</p>
        </footer>
    )
}

export default Footer
