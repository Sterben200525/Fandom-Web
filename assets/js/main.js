/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// MENU SHOW
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*=============== SCROLL TO SECTIONS ===============*/
const scrollLinks = document.querySelectorAll('.nav__link');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than or equal to 50 viewport height, add the 'scroll-header' class to the header tag
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

// Add the scroll event listener to the window object
window.addEventListener('scroll', scrollHeader);
/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
          },
          1024: {
            spaceBetween: 48,
          },
    }
  });
  

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});


/* Link active featured */ 
const linkFeatured = document.querySelectorAll('.featured__item');

function activeFeatured() {
  linkFeatured.forEach(item => item.classList.remove('active-featured'));
  this.classList.add('active-featured')
}
linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // Adjust this value as needed
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__link[href="#' + sectionId + '"]');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false,
})

sr.reveal('.home__title, .popular__container, .features__img, .featured__filters')
sr.reveal('.home__subtitle', { delay: 500 });
sr.reveal('.home__fuel', { delay: 600 });
sr.reveal('.home__img', { delay: 800 });
sr.reveal('.home__car-data', { delay: 800, interval: 100, origin: 'bottom'});
sr.reveal('.home__button', { delay: 1000, origin: 'bottom'});
sr.reveal('.about__group', {origin: 'left'});
sr.reveal('.about__data', {origin: 'right'});
sr.reveal('.about__data', {origin: 'right'});
sr.reveal('.features__map', {delay: 600, origin: 'bottom'});
sr.reveal('.features__card', {interval: 300});
sr.reveal('.featured__card, .logos__content, .footer__content', {interval: 100});
