const copyMail = () => {
	navigator.clipboard.writeText("mrlorem@gmail.com");
	const copyMessageSpan = document.createElement("span");
	copyMessageSpan.className = "copy-info";
};
