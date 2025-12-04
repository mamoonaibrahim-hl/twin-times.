/* Defensive DOM selection: support slightly different HTML structures */
const navbar = document.querySelector('.header .navbar') || document.querySelector('.nav') || document.querySelector('nav');
const menuBtn = document.querySelector('#menu-btn') || document.querySelector('.menu-btn');
const navClose = document.querySelector('#nav-close');
const headerEl = document.querySelector('.header') || document.querySelector('header');

if (menuBtn && navbar) {
    menuBtn.addEventListener('click', () => {
        // Toggle a class used to open/close the mobile nav
        navbar.classList.toggle('open');
    });
}

if (navClose && navbar) {
    navClose.addEventListener('click', () => {
        navbar.classList.remove('open');
    });
}

// Optional search form handling (only if present in DOM)
const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const closeSearch = document.querySelector('#close-search');

if (searchBtn && searchForm) {
    searchBtn.addEventListener('click', () => searchForm.classList.add('active'));
}
if (closeSearch && searchForm) {
    closeSearch.addEventListener('click', () => searchForm.classList.remove('active'));
}

// Scroll behaviour: add/remove header active class when page scrolls
if (headerEl) {
    const updateHeader = () => {
        if (window.scrollY > 0) headerEl.classList.add('active');
        else headerEl.classList.remove('active');
    };

    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.remove('open');
        updateHeader();
    });

    window.addEventListener('load', updateHeader);
}






// -------------------------------------------to top scroller------------------------------------

const toTop = document.querySelector('.to-top');
if (toTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) toTop.classList.add('active');
        else toTop.classList.remove('active');
    });
}






// --------------------------------------------product main page js----------------------------------

// Tabs behavior (only initialize if tab elements exist)
const tabs = document.querySelectorAll('.tabs__toggle');
const contents = document.querySelectorAll('.tabs__content');
if (tabs.length && contents.length) {
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            contents.forEach((content) => content.classList.remove('is-active'));
            tabs.forEach((t) => t.classList.remove('is-active'));
            contents[index].classList.add('is-active');
            tabs[index].classList.add('is-active');
        });
    });
}