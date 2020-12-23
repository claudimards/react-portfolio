import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import './Index.css'

function Index() {
    return (
        <>
        <Header />
        <main className="l-main">
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">
                        Hi, <br />I'am <span className="home__title-color">Claudimar</span><br /> Web Developer
                    </h1>
                    <a href="#contact" className="button">Contact</a>
                </div>

                <div className="home__social">
                    <Link to="https://www.linkedin.com/in/claudimards/" target="_blank" className="home__social-icon"><i className='bx bxl-linkedin' ></i></Link>
                    <Link to="https://github.com/claudimards" target="_blank" className="home__social-icon"><i className='bx bxl-github' ></i></Link>
                </div>

                <div className="home__img">
                    <img src="./images/perfil.png" alt="Foto do perfil" />
                </div>
            </section>

            <section className="about section" id="about">
                <h2 className="section-title">About</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src="./images/about.jpg" alt="Foto pessoal" />
                    </div>

                    <div>
                        <h2 className="about__subtitle">I'am Claudimar</h2>
                        <p className="about__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales mauris eu euismod dapibus. Aenean vitae mi a enim hendrerit scelerisque eu et nunc. Nunc suscipit nulla non tempor elementum. Vivamus auctor pellentesque massa id tincidunt.
                        </p>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}

export default Index
