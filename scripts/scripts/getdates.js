document.getElementById("year").innerText = new Date().getFullYear();
document.getElementById("lastModified").innerText = "Last modified: " + document.lastModified;


const pageVisitsDisplay = document.querySelector('#visits');

//get the stored value in localStorage.
let pageVisits = Number(window.localStorage.getItem("pageVisits-localStorage")) || 0;

//determine if it is the first visit and display the number of visits.
if (pageVisits !== 0) {
    pageVisitsDisplay.textContent = pageVisits;
} else {

    pageVisitsDisplay.textContent = "This is your first visit. 🥳 Welcome!";
}

// increment the number of visits.
pageVisits++;

// store the new number of visits value.
localStorage.setItem("pageVisits-localStorage", pageVisits);