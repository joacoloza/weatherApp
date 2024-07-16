export function updateAstroInfo (astroData){
    const tittle = document.createElement('h3');
    const sunRise = document.createElement('p');
    const sunSet = document.createElement('p');
    const moonRise = document.createElement('p');
    const moonSet = document.createElement('p');
    
    tittle.textContent= 'Astronimic Data';
    sunRise.textContent=`sunRise: ${astroData.astronomy.astro.sunrise}`;
    sunSet.textContent=`sunRise: ${astroData.astronomy.astro.sunset}`;
    moonRise.textContent=`sunRise: ${astroData.astronomy.astro.moonrise}`;
    moonSet.textContent=`sunRise: ${astroData.astronomy.astro.moonset}`;

    const weatherInfoText = document.createElement('div');
    weatherInfoText.className = 'weatherInfoText';

    weatherInfoText.appendChild(tittle);
    weatherInfoText.appendChild(sunRise);
    weatherInfoText.appendChild(sunSet);
    weatherInfoText.appendChild(moonRise);
    weatherInfoText.appendChild(moonSet);

    console.log(moonSet)

    const astroInfo = document.getElementById('astroInfoMain');
    astroInfo.innerHTML='';
    astroInfo.appendChild(weatherInfoText);
    console.log('3');
}