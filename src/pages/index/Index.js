import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'
import sr from '../../components/scrollreveal/ScrollReveal'

function Index() {
    const config = {
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    }
    sr.reveal('.home__title', {delay: 0}, config)
    sr.reveal('.button', {delay: 200}, config)
    sr.reveal('.home__img', {delay: 400}, config)
    sr.reveal('.home__social-icon', {interval: 200}, config)
    sr.reveal('.about__img', {}, config)
    sr.reveal('.about__subtitle', {delay: 200}, config)
    sr.reveal('.about__text', {delay: 400}, config)

    return (
        <main className="l-main">
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">
                        Hi, <br />I'am <span className="home__title-color">Claudimar</span><br /> Web Developer
                    </h1>
                    <Link to="/contact" className="button">Contact</Link>
                </div>

                <div className="home__social">
                    <Link to={'//www.linkedin.com/in/claudimards/'} target="_blank" className="home__social-icon"><i className='bx bxl-linkedin' ></i></Link>
                    <Link to={'//github.com/claudimards'} target="_blank" className="home__social-icon"><i className='bx bxl-github' ></i></Link>
                </div>

                <div className="home__img">
                    <img src="./images/perfil.webp" alt="Foto do perfil" />
                </div>
            </section>

            <section className="about section" id="about">
                <h2 className="section-title">About</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src="./images/about.webp" alt="Foto pessoal" />
                    </div>

                    <div>
                        <h2 className="about__subtitle">I'am Claudimar</h2>
                        <p className="about__text">
                            Graduado em Análise e Desenvolvimento de Sistemas pela Iescamp, atualmente trabalhando como desenvolvedor Front-End Jr na <Link to="https://nairuz.com.br/" target="_blank">Nairuz</Link>, e estudante entusiasmado das tecnologias Omnistack.
                        </p>
                        <p className="about__text">
                            Como diz a <Link to={'//rocketseat.com.br/'} target="_blank">"Rocketseat"</Link>: O aprendizado é contínuo e sempre havera um próximo nível. Então... bora codar!
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Index
