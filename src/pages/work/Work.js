import React from 'react'
import { Link } from 'react-router-dom'
import sr from '../../components/scrollreveal/ScrollReveal'
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
                <p className="about__text" >Últimos projetos aos quais tenho trabalhado</p>
                <div className="work__container bd-grid">
                    <div>
                        <Link to={'//coffeelover.com.br'} target="_blank">
                            <div className="work__img">
                                <img src="./images/works/coffee-lover.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Coffee Lover</h4>
                            <p className="about__text" >Site blog, projeto realizado com HTML5, CSS3, BS, JQUERY em WORDPRESS</p>
                        </Link>
                    </div>
                    
                    <div>
                        <Link to={'//nairuz.com.br/servicos/'} target="_blank">
                            <div className="work__img">
                                <img src="./images/works/nairuz-servicos.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Redesign da página de serviços</h4>
                            <p className="about__text" >Re-estruturação de página, projeto realizado com HTML5, CSS3, BS, JQUERY em WORDPRESS</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={'//suporte.nairuz.com.br'} target="_blank">
                            <div className="work__img">
                                <img src="./images/works/nairuz-suporte.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Site de Help Suporte</h4>
                            <p className="about__text" >Redesign completo do site, projeto realizado com HTML5, CSS3, BS, JQUERY em WORDPRESS</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={'//blog.naturaloil.com.br'} target="_blank">
                            <div className="work__img">
                                <img src="./images/works/natural-oil.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Natural Oil</h4>
                            <p className="about__text" >Site blog, projeto realizado com HTML5, CSS3, BS, JQUERY em WORDPRESS</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={'//www.widestock.com.br'} target="_blank">
                            <div className="work__img">
                                <img src="./images/works/widestock.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>WideStock</h4>
                            <p className="about__text" >Site de e-commerce, projeto realizado com HTML5, CSS3, BS, JQUERY com MAGENTO</p>
                        </Link>
                    </div>

                    <div>
                        <Link to={'//grassycafe.mageshop.com.br/'} target="_blank">
                            <div className="work__img">
                                <img src="./images/works/grassy-caffe.webp" alt="Imagem de trabalho realizado" />
                            </div>
                            <h4>Grassy Caffè</h4>
                            <p className="about__text" >Site de e-commerce, projeto realizado com HTML5, CSS3, BS, JQUERY com MAGENTO</p>
                        </Link>
                    </div>
                </div>
            </section>
    )
}

export default Work
