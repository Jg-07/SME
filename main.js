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
window.addEventListener('click', function (event) {
    let box = document.querySelector('.togContents');
    if (event.target != box && event.target != navCancel && event.target != navTog && event.target != togDisp) {
        navTog.classList.remove('hidden');
        navCancel.classList.add('hidden');
        togDisp.classList.add('hidden');
    }
})
product.addEventListener('click', function () {
    window.scrollTo({
        top: 650,
        behavior: "smooth",
    });
    product.classList.add('navC');
    feature.classList.remove('navC');
    pricing.classList.remove('navC');
    working.classList.remove('navC');
});
product1.addEventListener('click', function () {
    window.scrollTo({
        top: 680,
        behavior: "smooth",
    });
});
feature.addEventListener('click', function () {
    window.scrollTo({
        top: 1450,
        behavior: "smooth",
    })
    product.classList.remove('navC');
    feature.classList.add('navC');
    working.classList.remove('navC');
    pricing.classList.remove('navC');
})
feature1.addEventListener('click', function () {
    window.scrollTo({
        top: 1340,
        behavior: "smooth",
    })
})
working.addEventListener('click', function () {
    window.scrollTo({
        top: 2380,
        behavior: "smooth",
    })
    product.classList.remove('navC');
    feature.classList.remove('navC');
    pricing.classList.remove('navC');
    working.classList.add('navC');
})
working1.addEventListener('click', function () {
    window.scrollTo({
        top: 3170,
        behavior: "smooth",
    })
})
pricing.addEventListener('click', function () {
    window.scrollTo({
        top: 2950,
        behavior: "smooth",
    })
    product.classList.remove('navC');
    feature.classList.remove('navC');
    working.classList.remove('navC');
    pricing.classList.add('navC');
})
pricing1.addEventListener('click', function () {
    window.scrollTo({
        top: 3170,
        behavior: "smooth",
    })
})
navBrand.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
    product.classList.remove('navC');
    feature.classList.remove('navC');
    working.classList.remove('navC');
    pricing.classList.remove('navC');
})

