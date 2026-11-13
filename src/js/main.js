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
