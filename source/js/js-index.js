//Header

const navButton = document.querySelector(".page-header__nav-toggle");
const navMain = document.querySelector(".main-nav");

navButton.classList.remove('page-header__nav-toggle--nojs');
navMain.classList.remove('main-nav--nojs');

navButton.addEventListener("click", function (evt) {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navButton.classList.remove('page-header__nav-toggle--closed');
    navButton.classList.add('page-header__nav-toggle--active');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navButton.classList.add('page-header__nav-toggle--closed');
    navButton.classList.remove('page-header__nav-toggle--active');
  }
});


//Map
const interactiveMap = document.querySelector(".contacts-map--interactive");
const imgMap = document.querySelector(".contacts-map--img");

imgMap.classList.remove('contacts-map--active');
interactiveMap.classList.add('contacts-map--active');

//Slider

const buttonPast = document.querySelector(".example__button-past");
const slidePast = document.querySelector(".example__slide-past");
const buttonPresent = document.querySelector(".example__button-present");
const slidePresent = document.querySelector(".example__slide-present");

buttonPast.addEventListener("click", function (evt) {
  evt.preventDefault();
  slidePast.classList.add("example__slide--active");
  slidePresent.classList.remove("example__slide--active");
});

buttonPresent.addEventListener("click", function (evt) {
  evt.preventDefault();
  slidePresent.classList.add("example__slide--active");
  slidePast.classList.remove("example__slide--active");
});
