const mobileMenuOpenBtn = document.getElementById('mobile-open-btn');
const mobileMenuCloseBtn = document.getElementById('mobile-close-btn');
const mainMenu = document.getElementById('main-menu');

mobileMenuOpenBtn.addEventListener('click', (e) => {
    if(mainMenu.classList.contains('mobile-menu-active')) return;

    mainMenu.classList.add('mobile-menu-active');

    document.body.classList.add('mobile-menu-overlay-active');
});

mobileMenuCloseBtn.addEventListener('click', (e) => {
    if(mainMenu.classList.contains('mobile-menu-active')) {
        mainMenu.classList.remove('mobile-menu-active');
        document.body.classList.remove('mobile-menu-overlay-active');
    }
});