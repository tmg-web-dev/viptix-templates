const mobileMenuOpenBtn = document.getElementById('mobile-open-btn');
const mobileMenuCloseBtn = document.getElementById('mobile-close-btn');
const mainMenu = document.getElementById('main-menu');
const mainNav = document.getElementById('main-nav');

mobileMenuOpenBtn.addEventListener('click', (e) => {
    if(mainMenu.classList.contains('mobile-menu-active')) return;

    mainMenu.classList.add('mobile-menu-active');
    mainNav.classList.add('main-nav-full-screen');

    document.body.classList.add('mobile-menu-overlay-active');
});

mobileMenuCloseBtn.addEventListener('click', (e) => {
    if(mainMenu.classList.contains('mobile-menu-active')) {
        mainMenu.classList.remove('mobile-menu-active');
        mainNav.classList.remove('main-nav-full-screen');
        document.body.classList.remove('mobile-menu-overlay-active');
    }
});