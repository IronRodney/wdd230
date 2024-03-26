const header = document.querySelector(".calendar h3");
const dates = document.querySelector(".dates");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalendar() {
    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();
    const end = new Date(year, month, endDate).getDay();
    const endDatePrev = new Date(year, month, 0).getDate();

    let datesHtml = "";

    for(let i = start; i > 0; i--) {
        datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
    }

    for(let i = 1; i <= endDate; i++) {
        let className = (
            i === date.getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
        ) ? ' class="today"': '';
        datesHtml += `<li${className}>${i}</li>`;
    }

    for(let i = end; i < 6; i++) {
        datesHtml += `<li class="inactive">${i - end + 1}</li>`;
    }

    dates.innerHTML = datesHtml;
    header.textContent = `${months[month]} ${year}`;
}

prevBtn.addEventListener("click", () => {
    if (month === 0) {
        year--;
        month = 11;
    } else {
        month--;
    }
    renderCalendar();
});

nextBtn.addEventListener("click", () => {
    if (month === 11) {
        year++;
        month = 0;
    } else {
        month++;
    }
    renderCalendar();
});

renderCalendar();
