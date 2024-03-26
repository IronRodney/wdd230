const darkModeToggle = document.querySelector("#dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("change", () => {
	if (darkModeToggle.checked) {
		body.classList.add("dark-mode");
	} else {
		body.classList.remove("dark-mode");
	}
});