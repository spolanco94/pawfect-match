document.querySelector('.hamburger').addEventListener('click', function() {
    var navBar = document.querySelector('#nav-bar');
    var navLinks = document.querySelector('.nav-links');
    var hamburger = this;
    var logoName = document.querySelector('.logo-name');

    navBar.classList.toggle('menu-open');
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');

    if (navLinks.classList.contains('show')) {
        navBar.appendChild(hamburger);
        logoName.style.flexDirection = 'column';
        hamburger.style.padding = '0';
    } else {
        navBar.insertBefore(hamburger, navLinks);
        logoName.style.flexDirection = 'row';
        hamburger.style.paddingRight = 10 + 'px';
    }

    console.log('clicked'+document.querySelector('.nav-links').classList);
});

window.onload = function() { 
    var navBar = document.querySelector('#nav-bar');
    var body = document.querySelector('body');

    body.style.paddingTop = navBar.offsetHeight + 'px';
}

window.onresize = function() {
    var navBar = document.querySelector('#nav-bar');
    var body = document.querySelector('body');

    body.style.paddingTop = navBar.offsetHeight + 'px';
}