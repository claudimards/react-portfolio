/* Scroll Reveal Animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* Scroll Home */
sr.reveal('.home__title', {delay: 0})
sr.reveal('.button', {delay: 200})
sr.reveal('.home__img', {delay: 400})
sr.reveal('.home__social-icon', {interval: 200})

/* Scroll About */
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay: 200})
sr.reveal('.about__text', {delay: 400})

/* Scroll Skills */
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {delay: 200})
sr.reveal('.skills__data', {interval: 200})
sr.reveal('.skills__img', {delay: 400})

/* Scroll Work */
sr.reveal('.work__img', {interval: 200})

/* Scroll Contact */
sr.reveal('.contact__input', {interval: 200})