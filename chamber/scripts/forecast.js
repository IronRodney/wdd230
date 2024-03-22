const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=-24.40&lon=26.12&units=metric&appid=dc60c72c26a311e647126394793a87d0";
fetch(apiUrl)
    .then(response => response.json())
    .then(jsObject => {
        const fiveDayForecast = jsObject.list.filter(x => x.dt_txt.includes("15:00:00"));
        console.log(fiveDayForecast);
        let day = 0;
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        fiveDayForecast.forEach(forecast => {
            const d = new Date(forecast.dt_txt);
            document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = forecast.main.temp_max.toFixed(0);
            day++;
        });
    });