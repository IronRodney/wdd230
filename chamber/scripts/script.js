document.getElementById("year").innerText = new Date().getFullYear();
document.getElementById("lastModified").innerText = "Last modified: " + document.lastModified;

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("&#9776;")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "&#9776;";
	}
});

