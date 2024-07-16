export function updateInfo (weatherData){
    /*Upper section*/ 
    const cityNameUpper = document.createElement('h3');
    const temperatureUpper = document.createElement('p');
    
    cityNameUpper.textContent = `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}  `;
    temperatureUpper.textContent = `    Temperature: ${weatherData.current.temp_c}°C`;

    weatherInfoUpper.innerHTML = '';  // Limpiar contenido previo
    weatherInfoUpper.appendChild(cityNameUpper);
    weatherInfoUpper.appendChild(temperatureUpper);
    
/*Main section*/
    const weaterIcon = document.createElement('img');
    const title = document.createElement('h3');
    const weather = document.createElement('h4');
    const feelsLike = document.createElement('h4');
    const humidity = document.createElement('p');
    const pressure = document.createElement('p');
    const wind = document.createElement('p');
    const visibility = document.createElement('p');
    const rain = document.createElement('p');       

    title.textContent = 'General Forecast';
    title.className = 'pronostiqueTitle';

    weather.textContent = weatherData.current.condition.text;
    weather.className = 'weather';

    weaterIcon.src = weatherData.current.condition.icon;
    feelsLike.textContent = `Feelslike: ${weatherData.current.feelslike_c} °C`;
    humidity.textContent= `Humidity: ${weatherData.current.humidity}%`;
    pressure.textContent = `Pressure: ${weatherData.current.pressure_mb} mb`;
    wind.textContent = `Wind: ${weatherData.current.wind_kph} Km/h`
    visibility.textContent = `Visibility: ${weatherData.current.vis_km} Km`;
    rain.textContent = `Rain: ${weatherData.current.precip_in} %`;

    const weatherInfoText = document.createElement('div');
    weatherInfoText.className = 'weatherInfoText';
    weatherInfoText.appendChild(title);
    weatherInfoText.appendChild(feelsLike);
    weatherInfoText.appendChild(humidity);
    weatherInfoText.appendChild(pressure);
    weatherInfoText.appendChild(wind);
    weatherInfoText.appendChild(visibility);
    weatherInfoText.appendChild(rain);

    weatherInfoMain.innerHTML='';
    weatherInfoMain.appendChild(weatherInfoText);
    weatherInfoMain.appendChild(weaterIcon);
}