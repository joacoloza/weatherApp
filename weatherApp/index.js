import {createDefaultInfo} from  "./modules/defaulWeather.js";
import { createDefaultAstro } from "./modules/defaulAstro.js";
import { createSearchInfo } from "./modules/loadSearchWeather.js";
import { updateInfo } from "./modules/updateWeatherInfo.js";
import { updateAstroInfo } from "./modules/updateAstroInfo.js";
import { createSearchAstro } from "./modules/searchAstro.js";

document.addEventListener('DOMContentLoaded', async function(){
    const nameInput = document.getElementById('inputValue');
    const btn = document.getElementById('searchBtn');
    const weatherInfoUpper = document.getElementById("weatherInfoUpper");
    const weatherInfoMain = document.getElementById("weatherInfoMain");
    const astroInfo = document.getElementById("astroInfoMain");
    
    try {
        const currentWeatherData = await createDefaultInfo();
        const currentAstroData = await createDefaultAstro();
        
        console.log(currentAstroData);
        console.log(currentWeatherData);

        updateInfo(currentWeatherData);
        updateAstroInfo(currentAstroData);

    }catch(error){
        alert('Ubication not found'); 
    }

    btn.addEventListener('click', async function() {
        const valueName = nameInput.value;
        try{
            const currentWeatherData = await createSearchInfo(valueName);
            const astroData = await createSearchAstro(valueName);
            updateInfo(currentWeatherData);
            updateAstroInfo(astroData)
        }catch(error){

        }
    });    
});