// Scroll Sections Active Link //
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        navlinks.forEach(links =>{
        links.classlist.remove('active');
        document.querySelector('header nav a[href *=' + id +']').classList.add('active');
        });
    });
}

ScrollReveal({
    reset: true,
    distance: '180px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .about-content, .services-box, .portfolio-box, .contact-box', {origin: 'bottom'});