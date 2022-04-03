import './style.css'
import Typed from 'typed.js'

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