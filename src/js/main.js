const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('.header__nav');

menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('header__nav--open');
    menuBtn.setAttribute('aria-expanded', isOpen);
});

nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        nav.classList.remove('header__nav--open');
        menuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Map Overlay
const viewMapBtn = document.getElementById('view-map');
const viewMapOverlay = document.getElementById('overlay__map');
const closeMapBtn = document.querySelector('.overlay__close');

viewMapBtn.addEventListener('click', () => {
    viewMapOverlay.classList.add('open');
    viewMapOverlay.setAttribute('aria-hidden', 'false');
});

closeMapBtn.addEventListener('click', () => {
    viewMapOverlay.classList.remove('open');
    viewMapOverlay.setAttribute('aria-hidden', 'true');
});
