var modalLogin = document.querySelector(".modal-login");
var modalMap = document.querySelector(".modal-map");

var openLogin = document.querySelector(".modal-open__login");
var openLogin2 = document.querySelector(".modal-open__login2");
var openMap = document.querySelector(".modal-open__map");
var openMap2 = document.querySelector(".modal-open__map2");
var close = document.querySelector(".modal-button-close");

openLogin.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalLogin.classList.add("modal-show");
});

openLogin2.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalLogin.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalLogin.classList.remove("modal-show");
});

openMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
});

openMap2.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
});
