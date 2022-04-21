let responsiveMenuBtn = document.getQuerySelector(".responsive-menu-btn");
let phoneNav = document.querySelector(".nav-phone");

responsiveMenuBtn.onlick = function () {
	phoneNav.classList.toggle("active");
};
