const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=5432f31d8d18f2e5336935923df3e196&units=metric"

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
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;C`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    desc = capitalizeFirstLetter(desc);
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;
} 



apiFetch();