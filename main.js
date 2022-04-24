import Typed from 'typed.js'

let navbar = document.querySelector('.navbar');
let navBrand = document.querySelector('.navBrand');
let togDisp = document.querySelector('.togContents');
let navCancel = document.querySelector('.navCancel');
let navTog = document.querySelector('.navTog');
let pro = document.querySelector('#product');
let fea = document.querySelector('#feature');
let work = document.querySelector('#working');

var typed = new Typed('.typed', {
    strings: [
        "We Ascend !!",
        "We Conquer !!",
        "Welcome to the hub of royal mechons",
        "The Society of Mechanical engineering,CEG"],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 3300,
    loop: true,
});

window.onscroll = function () {
    if (window.scrollY == 0) {
        navbar.classList.remove('navCol');
    }
    else {
        navbar.classList.add('navCol');
    }
}

navTog.addEventListener('click', function () {
    togDisp.classList.remove('closeTog');
    togDisp.classList.add('openTog');
    navTog.classList.add('hidden');
    navCancel.classList.add('appear');
    navCancel.classList.remove('hidden');
    togDisp.classList.remove('hidden');
})
navCancel.addEventListener('click', function () {
    togDisp.classList.remove('openTog');
    togDisp.classList.add('closeTog');
    navTog.classList.add('appear');
    navTog.classList.remove('hidden');
    navCancel.classList.add('hidden');
    togDisp.classList.add('hidden');
})


