let menuButton = document.querySelector(".header__menu");
let closeButton = document.querySelector(".header__close");
let wrapper = document.querySelector(".header__wrapper");

menuButton.addEventListener('click', () =>{
    menuButton.classList.add("header__menu--off");
    closeButton.classList.add("header__close--off");
    wrapper.classList.add("header__wrapper--open");
})

closeButton.addEventListener('click', () =>{
    menuButton.classList.remove("header__menu--off");
    closeButton.classList.remove("header__close--off");
    wrapper.classList.remove("header__wrapper--open");
})