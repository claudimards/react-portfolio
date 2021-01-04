import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import './Skills.css'

function Skills() {
    return (
        <>
        <Header />
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>

            <div className="skills__container bd-grid">
                <div>
                    <h2 className="skills__subtitle">Professional Skills</h2>
                    <p className="skills__text">
                        Aqui apresento minhas habilidades profissionais, as quais busco constante aprendizado para evoluir cada vez mais em minha carreira. Em alguns casos atuo tanto no Front-End quanto no Back-End.
                    </p>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-html5 skills__icon' ></i>
                            <span className="skills__name">HTML5</span>
                        </div>

                        <div>
                            <span className="skills__percentage">85%</span>
                        </div>
                        
                        <div className="skills__bar skills__html"></div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-css3 skills__icon' ></i>
                            <span className="skills__name">CSS3</span>
                        </div>

                        <div>
                            <span className="skills__percentage">60%</span>
                        </div>

                        <div className="skills__bar skills__css"></div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-bootstrap skills__icon' ></i>
                            <span className="skills__name">Bootstrap</span>
                        </div>

                        <div>
                            <span className="skills__percentage">60%</span>
                        </div>

                        <div className="skills__bar skills__bs"></div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-javascript skills__icon' ></i>
                            <span className="skills__name">JavaScript</span>
                        </div>

                        <div>
                            <span className="skills__percentage">35%</span>
                        </div>

                        <div className="skills__bar skills__js"></div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-jquery skills__icon' ></i>
                            <span className="skills__name">JQuery</span>
                        </div>

                        <div>
                            <span className="skills__percentage">25%</span>
                        </div>

                        <div className="skills__bar skills__jq"></div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-wordpress skills__icon' ></i>
                            <span className="skills__name">WordPress</span>
                        </div>

                        <div>
                            <span className="skills__percentage">30%</span>
                        </div>

                        <div className="skills__bar skills__wp"></div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-magento skills__icon' ></i>
                            <span className="skills__name">Magento</span>
                        </div>

                        <div>
                            <span className="skills__percentage">30%</span>
                        </div>

                        <div className="skills__bar skills__mage"></div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-react skills__icon' ></i>
                            <span className="skills__name">React.Js</span>
                        </div>

                        <div>
                            <span className="skills__percentage">35%</span>
                        </div>

                        <div className="skills__bar skills__react"></div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-nodejs skills__icon' ></i>
                            <span className="skills__name">Node.Js</span>
                        </div>

                        <div>
                            <span className="skills__percentage">10%</span>
                        </div>

                        <div className="skills__bar skills__node"></div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-python skills__icon' ></i>
                            <span className="skills__name">Python</span>
                        </div>

                        <div>
                            <span className="skills__percentage">10%</span>
                        </div>

                        <div className="skills__bar skills__py"></div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-git skills__icon' ></i>
                            <span className="skills__name">Git</span>
                        </div>

                        <div>
                            <span className="skills__percentage">10%</span>
                        </div>

                        <div className="skills__bar skills__git"></div>
                    </div>
                </div>

                <div>
                    <img src="./images/work3.webp" alt="Imagem apresentação" className="skills__img" />
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Skills
