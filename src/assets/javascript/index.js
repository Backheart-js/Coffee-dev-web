const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navbar = $('#header__category');
const menuBtn = $('#header__menu-on-mobile');

let isActive = false;
//function process on/off navbar on mobile
const toggleNavbar = () => {
    isActive = !isActive;
    console.log(isActive);
    navbar.classList.toggle('block', isActive);

    navbar.classList.toggle('hidden', !isActive);
}

menuBtn.addEventListener('click', toggleNavbar);
