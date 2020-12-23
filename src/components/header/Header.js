import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <Link to="/" className="nav__logo">Claudimar</Link>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><Link to="#home" className="nav__link active">Home</Link></li>
                        <li className="nav__item"><Link to="#about" className="nav__link">About</Link></li>
                        <li className="nav__item"><Link to="#skills" className="nav__link">Skills</Link></li>
                        <li className="nav__item"><Link to="#work" className="nav__link">Work</Link></li>
                        <li className="nav__item"><Link to="#contact" className="nav__link">Contact</Link></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
