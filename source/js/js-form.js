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


//Form
const submitButton = document.querySelector(".form__button");
const catName = document.querySelector(".cat-name");
const catWeight = document.querySelector(".cat-weight");
const email = document.querySelector(".feedback-contacts__item-email");
const emailInput = document.querySelector(".feedback-contacts__icon-email");
const tel = document.querySelector(".feedback-contacts__item-tel");
const telInput = document.querySelector(".feedback-contacts__icon-tel");

submitButton.addEventListener("click", function (evt) {
  if (!catName.value) {
    evt.preventDefault();
    catName.classList.add("info-cat__field--error");
    if (catName.classList.contains("info-cat__field--error")) {
      catName.addEventListener("click", function (evt) {
        evt.preventDefault();
        catName.classList.remove("info-cat__field--error");
      }
      )
    };
  }
});

submitButton.addEventListener("click", function (evt) {
  if (!catWeight.value) {
    evt.preventDefault();
    catWeight.classList.add("info-cat__field--error");
    if (catWeight.classList.contains("info-cat__field--error")) {
      catWeight.addEventListener("click", function (evt) {
        evt.preventDefault();
        catWeight.classList.remove("info-cat__field--error");
      }
      )
    };
  }
});

submitButton.addEventListener("click", function (evt) {
  if (!emailInput.value) {
    evt.preventDefault();
    email.classList.add("feedback-contacts__field--error");
    if (email.classList.contains("feedback-contacts__field--error")) {
      emailField.addEventListener("click", function (evt) {
        evt.preventDefault();
        email.classList.remove("feedback-contacts__field--error");
      }
      )
    };
  }
});

submitButton.addEventListener("click", function (evt) {
  if (!telInput.value) {
    evt.preventDefault();
    tel.classList.add("feedback-contacts__field--error");
    if (tel.classList.contains("feedback-contacts__field--error")) {
      telInput.addEventListener("click", function (evt) {
        evt.preventDefault();
        tel.classList.remove("feedback-contacts__field--error");
      }
      )
    };
  }
});
