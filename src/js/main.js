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
    disableScroll();

});

closeMapBtn.addEventListener('click', () => {
    viewMapOverlay.classList.remove('open');
    viewMapOverlay.setAttribute('aria-hidden', 'true');
    enableScroll();
});

const disableScroll = () => {
    const scrollPosition = window.scrollY;
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = scrollPosition;
    document.body.style.top = `${-scrollPosition}px`;
};
const enableScroll = () => {
    // Ensure when the overlay is closed the scroll position is correct
    const scrollPosition = parseInt(document.body.dataset.position, 10);
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scrollTo(0, scrollPosition); // automatically scroll to previous position
};

// Header gets a background once you scroll a bit down
const header = document.querySelector('.header');
const onScroll = () => header.classList.toggle('header--solid', window.scrollY > 60);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Menu filter
const filterButtons = document.querySelectorAll('.menu__filter-btn');
const cards = document.querySelectorAll('.menu__card');

filterButtons.forEach(button => {

    button.addEventListener('click', () => {
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });

        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');

        const filter = button.getAttribute('data-filter');

        cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (cardCategory === filter || filter === 'all') {
                card.classList.remove('menu__card--hide');
            } else {
                card.classList.add('menu__card--hide');
            }
        });
    });
})
