import React from 'react'
import { Link } from 'react-router-dom'
import sr from '../components/scrollreveal/ScrollReveal'
import './Work.css'

function Work() {
    const config = {
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    }
    sr.reveal('.work__img', {interval: 200}, config)

    return (
        <section className="work section" id="work">
                <h2 className="section-title">Work</h2>
                <p className="about__text" >Projetos aos quais tenho trabalhado</p>
                <div className="work__container bd-grid">
                    <div>
                        <Link to={'//homolog-php.nairuz.com.br/coffee/'} target="_blank">
                            <div className="work__img">
                                <img src="./images/coffee-lover.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Coffee Lover</h4>
                            <p className="about__text" >Projeto de blog, desenvolvido em Wordpress</p>
                        </Link>
                    </div>
                    
                    <div>
                        <Link to={'//#'} target="_blank">
                            <div className="work__img">
                                <img src="./images/work3.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Job title</h4>
                            <p className="about__text" ></p>
                        </Link>
                    </div>
                    <div>
                        <Link to={'//#'} target="_blank">
                            <div className="work__img">
                                <img src="./images/work3.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Job title</h4>
                            <p className="about__text" ></p>
                        </Link>
                    </div>
                    <div>
                        <Link to={'//#'} target="_blank">
                            <div className="work__img">
                                <img src="./images/work3.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Job title</h4>
                            <p className="about__text" ></p>
                        </Link>
                    </div>
                    <div>
                        <Link to={'//#'} target="_blank">
                            <div className="work__img">
                                <img src="./images/work3.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Job title</h4>
                            <p className="about__text" ></p>
                        </Link>
                    </div>

                    <div>
                        <Link to={'//grassycafe.mageshop.com.br/'} target="_blank">
                            <div className="work__img">
                                <img src="./images/grassy-caffe.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Grassy Caffè</h4>
                            <p className="about__text" >Projeto de ecommerce, desenvolvido em HTML5, CSS3, JS, JQUERY e MAGENTO</p>
                        </Link>
                    </div>
                </div>
            </section>
    )
}

export default Work
