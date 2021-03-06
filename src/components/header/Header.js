import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const mobileMenu = () => {
        setOpenMenu(!openMenu)
    }
    
    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <Link to="/" className="nav__logo" onClick={() => setOpenMenu(false)}>Claudimar</Link>
                </div>

                <div className={openMenu ? 'nav__menu show' : 'nav__menu'} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item" onClick={() => setOpenMenu(false)}>
                            <NavLink to="/" exact className="nav__link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav__item" onClick={() => setOpenMenu(false)}>
                            <NavLink to="/skills" className="nav__link" activeClassName="active">Skills</NavLink>
                        </li>
                        <li className="nav__item" onClick={() => setOpenMenu(false)}>
                            <NavLink to="/work" className="nav__link" activeClassName="active">Work</NavLink>
                        </li>
                        <li className="nav__item" onClick={() => setOpenMenu(false)}>
                            <NavLink to="/contact" className="nav__link" activeClassName="active">Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu' onClick={mobileMenu}></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
