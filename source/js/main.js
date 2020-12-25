(() => {
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

})();

{
  //Map
  const interactiveMap = document.querySelector(".contacts-map--interactive");
  const imgMap = document.querySelector(".contacts-map--img");

  imgMap.classList.remove('contacts-map--active');
  interactiveMap.classList.add('contacts-map--active');
}

{
  //Form
  const submitButton = document.querySelector(".form__button");
  if (submitButton) {
    const form = document.querySelector(".form");
    const catName = document.querySelector("#cat-name");
    const catWeight = document.querySelector("#cat-weight");
    const emailInput = document.querySelector("#client-email");
    const telInput = document.querySelector("#client-tel");
    const requiredFields = [catName, catWeight, emailInput, telInput];

    requiredFields.forEach(field => {
      field.removeAttribute("required");
      field.addEventListener("input", () => {
        field.setAttribute("required", "true");
      })
    });

    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      requiredFields.forEach(field => {
        field.setAttribute("required", "true");
      });

      const valid = form.checkValidity();
      if (valid) {
        form.submit();
      }
    })
  }
}

{
  //Slider
  const slidePast = document.querySelector(".example__slide-past");
  const slidePresent = document.querySelector(".example__slide-present");

  const buttonPast = document.querySelector(".example__button-past");
  if (buttonPast) {
    buttonPast.addEventListener("click", function (evt) {
      evt.preventDefault();
      slidePast.classList.add("example__slide--active");
      slidePresent.classList.remove("example__slide--active");
    });
  }

  const buttonPresent = document.querySelector(".example__button-present");
  if (buttonPresent) {
    buttonPresent.addEventListener("click", function (evt) {
      evt.preventDefault();
      slidePresent.classList.add("example__slide--active");
      slidePast.classList.remove("example__slide--active");
    });
  }

}
