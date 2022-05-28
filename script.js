// Toggle menu

const menuBurgerBtn = document.querySelector("#hamburger");
const navList = document.querySelector(".nav-list");

menuBurgerBtn.addEventListener("click", () => {
	navList.classList.toggle("nav-list-active");
});

// Mail copy function

const copyMailBtn = document.querySelector("#copy-btn");

copyMailBtn.addEventListener("click", () => {
	navigator.clipboard.writeText("mrlorem@gmail.com");

	let copyMessageDOM = document.createElement("span");
	copyMessageDOM.classList.add("copy-info");
	copyMessageDOM.innerText = "Mail skopiowany!";
	copyMailBtn.appendChild(copyMessageDOM);

	const counter = () => {
		copyMailBtn.removeChild(copyMessageDOM);
	};
	setTimeout(counter, 1500);
});
