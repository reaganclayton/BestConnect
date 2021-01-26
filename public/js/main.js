//Loading CSS
document.querySelector("#fontAwe").removeAttribute('disabled');
document.querySelector("#googleFonts").removeAttribute('disabled');

//Variables
const burgerMenu = document.querySelector('.hamburger');

const navAbout = document.querySelector('#nav-about');
const navPackages = document.querySelector('#nav-packages');
const navContact = document.querySelector('#nav-contact');

const signUp = document.querySelector('#sign-up');
const logIn = document.querySelector('#log-in');
const closeIconSignUp = document.querySelector('.close-icon-sign-up');
const closeIconLogIn = document.querySelector('.close-icon-log-in');

const switchSignUp = document.querySelector('.switch-sign-up');
const switchLogIn = document.querySelector('.switch-log-in');

//Fade out loader
window.onload = () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    loaderWrapper.style.opacity = "0";
    loaderWrapper.style.display = "none"
};

//Burger Menu Toggle
burgerMenu.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('toggle');
    burgerMenu.classList.toggle('toggle');
});

//Scroll to Anchor Points
navAbout.addEventListener('click', () => {
    const aboutSection = document.querySelector('.about-cards');
    aboutSection.scrollIntoView({behavior: 'smooth'});
});

navPackages.addEventListener('click', () => {
    const packagesSection = document.querySelector('.packages');
    packagesSection.scrollIntoView({behavior: 'smooth'});
});

navContact.addEventListener('click', () => {
    const contactSection = document.querySelector('.contact');
    contactSection.scrollIntoView({behavior: 'smooth'});
});
//End Scroll to Anchor Points


//Navbar Animation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.nav');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

//Sign Up Popup
signUp.addEventListener('click', () => {
    window.scrollTo(0,0);
    document.querySelector('.sign-up').style.display = "flex";
    
});

closeIconSignUp.addEventListener('click', () => {
    document.querySelector('.sign-up').style.display = "none";
});

//Log In Popup
logIn.addEventListener('click', () => {
    window.scrollTo(0,0);
    document.querySelector('.log-in').style.display = "flex";
});

closeIconLogIn.addEventListener('click', () => {
    document.querySelector('.log-in').style.display = "none";
});

//Switch to sign up from log in
switchSignUp.addEventListener('click', () => {
    document.querySelector('.log-in').style.display = "none";
    document.querySelector('.sign-up').style.display = "flex";
});

//Switch to login from sign up
switchLogIn.addEventListener('click', () => {
    document.querySelector('.sign-up').style.display = "none"
    document.querySelector('.log-in').style.display = "flex";
});