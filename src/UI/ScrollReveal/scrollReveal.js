import ScrollReveal from 'scrollreveal'

ScrollReveal({
    reset:true,
    distance:'60px',
    duration:2000,
    delay:400,
})

ScrollReveal().reveal('.home', {delay:500,origin:'left'})
ScrollReveal().reveal('.weapons-title', {delay:200,origin:'left'})
ScrollReveal().reveal('.weapons-container img', {delay:300,origin:'bottom',interval:200})
ScrollReveal().reveal('.services-title', {delay:600,origin:'left'})
ScrollReveal().reveal('.services-container', {delay:300,origin:'right'})
ScrollReveal().reveal('.service h1', {delay:100,origin:'bottom'})
ScrollReveal().reveal('.projects .projects-title h1', {delay:600,origin:'top'})
ScrollReveal().reveal('.projects .projects-title p', {delay:600,origin:'bottom'})
ScrollReveal().reveal('.projects .projects-container .project img', {delay:600,origin:'bottom'})
ScrollReveal().reveal('.contact .contact-title', {delay:600,origin:'bottom'})
ScrollReveal().reveal('.contact-form-container ', {delay:600,origin:'right'})








export default ScrollReveal()