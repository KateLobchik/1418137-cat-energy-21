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
