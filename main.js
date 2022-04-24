import './style.css'
import Typed from 'typed.js'

let navh = document.querySelector('.navHub');
let hum = document.querySelector('.humb');

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

let navbar = document.querySelector('.nav-items');

window.onscroll = function () {
    if (window.scrollY == 0) {
        navbar.classList.remove('navCol');
    }
    else {
        navbar.classList.add('navCol');
    }
}

let c = 0;

hum.addEventListener('click', function () {
    if (c == 0) {
        navh.classList.add('openTog');
        navh.classList.remove('hidden');
        c++;
    }
    else {
        navh.classList.remove('openTog');
        navh.classList.add('hidden');
    }
})

