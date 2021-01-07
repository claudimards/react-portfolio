import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    
        if (toggle && nav){
            toggle.addEventListener('click', ()=> {
                nav.classList.toggle('show')
            })
        }
    }
    showMenu('nav-toggle', 'nav-menu')

    /* Active and Remove Menu */
    const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
        // Active link
        navLink.forEach(nav => nav.classList.remove('active'))
        this.classList.add('active')

        // Remove menu mobile
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show')
    }

    navLink.forEach( nav => nav.addEventListener('click', linkAction))
    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <Link to="/" className="nav__logo">Claudimar</Link>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><Link to="/" className="nav__link active">Home</Link></li>
                        <li className="nav__item"><Link to="/skills" className="nav__link">Skills</Link></li>
                        <li className="nav__item"><Link to="/work" className="nav__link">Work</Link></li>
                        <li className="nav__item"><Link to="/contact" className="nav__link">Contact</Link></li>
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
