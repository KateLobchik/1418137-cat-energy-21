(()=>{const e=document.querySelector(".page-header__nav-toggle"),t=document.querySelector(".main-nav");e.classList.remove("page-header__nav-toggle--nojs"),t.classList.remove("main-nav--nojs"),e.addEventListener("click",function(a){t.classList.contains("main-nav--closed")?(t.classList.remove("main-nav--closed"),t.classList.add("main-nav--opened"),e.classList.remove("page-header__nav-toggle--closed"),e.classList.add("page-header__nav-toggle--active")):(t.classList.add("main-nav--closed"),t.classList.remove("main-nav--opened"),e.classList.add("page-header__nav-toggle--closed"),e.classList.remove("page-header__nav-toggle--active"))})})();{const e=document.querySelector(".contacts-map--interactive");document.querySelector(".contacts-map--img").classList.remove("contacts-map--active"),e.classList.add("contacts-map--active")}if(document.querySelector(".form__button")){const e=document.querySelector(".form"),t=[document.querySelector("#cat-name"),document.querySelector("#cat-weight"),document.querySelector("#client-email"),document.querySelector("#client-tel")];t.forEach(e=>{e.removeAttribute("required"),e.addEventListener("input",()=>{e.setAttribute("required","true")})}),e.addEventListener("submit",a=>{a.preventDefault(),t.forEach(e=>{e.setAttribute("required","true")}),e.checkValidity()&&e.submit()})}