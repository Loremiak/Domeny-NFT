let menuBurgerBtn = document.querySelector(".responsive-menu-btn");
let navList = document.querySelector(".nav-list");

menuBurgerBtn.addEventListener("click", () => {
	console.log(1);
});

menuBurgerBtn.onlick = function () {
	console.log("1");
	phoneNav.classList.toggle("active");
};
