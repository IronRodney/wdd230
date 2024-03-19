const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=24.34&lon=26.08&appid=dc60c72c26a311e647126394793a87d0&units=imperial"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data)
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function capitalizeFirstLetter(string) {
    return string.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    desc = capitalizeFirstLetter(desc);
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;
} 



apiFetch();