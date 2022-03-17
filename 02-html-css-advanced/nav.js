let button = document.querySelector(".nav__right__burger-icon");
let nav = document.querySelector(".nav__burger");
let menuClose = document.querySelector(".nav__burger__cancel");

button.onclick = function() {
    nav.classList.toggle("nav__burger__open");
    nav.classList.toggle("nav__burger__close");
}

menuClose.onclick = function() {
    nav.classList.toggle("nav__burger__close");
}