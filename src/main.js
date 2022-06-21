const btnHamburger= document.querySelector('#btnHamburger');
const body=document.querySelector('body');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');
const fadeMenu = document.querySelector('.has-fade-menu');

btnHamburger.addEventListener('click', function() {

    if(header.classList.contains('open')) {// Close Hamburger Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeMenu.classList.add('fade-out-menu');
        fadeMenu.classList.remove('fade-in-menu');
        fadeElems.forEach(function(element) {
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        })
    }

     else { //Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeMenu.classList.remove('fade-out-menu');
        fadeMenu.classList.add('fade-in-menu');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })

    } 

})

