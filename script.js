document.querySelector('.hamburger').addEventListener('click', function() {
    var navBar = document.querySelector('#nav-bar');
    var navLinks = document.querySelector('.nav-links');
    var hamburger = this;

    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');

    if (navLinks.classList.contains('show')) {
        navBar.appendChild(hamburger);
    } else {
        navBar.insertBefore(hamburger, navLinks);
    }

    console.log('clicked'+document.querySelector('.nav-links').classList);
});