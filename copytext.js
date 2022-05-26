const copyMailBtn = document.querySelector("#copy-btn");

copyMailBtn.addEventListener("click", () => {
	navigator.clipboard.writeText("mrlorem@gmail.com");

	let copyMessageDOM = document.createElement("span");
	copyMessageDOM.classList.add("copy-info");
	copyMessageDOM.innerText = "Mail skopiowany!";
	copyMessageDOM.appendChild(copyMailBtn);
});
