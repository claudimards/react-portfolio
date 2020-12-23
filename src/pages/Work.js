import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import './Work.css'

function Work() {
    return (
        <>
        <Header />
        <section className="work section" id="work">
                <h2 className="section-title">Work</h2>
                <p className="about__text" >Projetos aos quais tenho trabalhado</p>
                <div className="work__container bd-grid">
                    <div>
                        <Link to="http://homolog-php.nairuz.com.br/coffee/" target="_blank">
                            <div className="work__img">
                                <img src="./images/coffee-lover.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Coffee Lover</h4>
                            <p className="about__text" >Projeto de blog, desenvolvido em Wordpress</p>
                        </Link>
                    </div>
                    
                    <div>
                        <Link to="#" target="_blank">
                            <div className="work__img">
                                <img src="./images/work3.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Job title</h4>
                            <p className="about__text" ></p>
                        </Link>
                    </div>
                    <div>
                        <Link to="#" target="_blank">
                            <div className="work__img">
                                <img src="./images/work3.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Job title</h4>
                            <p className="about__text" ></p>
                        </Link>
                    </div>
                    <div>
                        <Link to="#" target="_blank">
                            <div className="work__img">
                                <img src="./images/work3.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Job title</h4>
                            <p className="about__text" ></p>
                        </Link>
                    </div>
                    <div>
                        <Link to="#" target="_blank">
                            <div className="work__img">
                                <img src="./images/work3.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Job title</h4>
                            <p className="about__text" ></p>
                        </Link>
                    </div>

                    <div>
                        <Link to={"//https://grassycafe.mageshop.com.br/"} target="_blank">
                            <div className="work__img">
                                <img src="./images/grassy-caffe.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Grassy Caffè</h4>
                            <p className="about__text" >Projeto de ecommerce, desenvolvido em HTML5, CSS3, JS, JQUERY e MAGENTO</p>
                        </Link>
                    </div>
                </div>
            </section>
        <Footer />   
        </>
    )
}

export default Work
