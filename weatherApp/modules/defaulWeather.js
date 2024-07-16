export function createDefaultInfo(){
    return new Promise((resolve,reject)=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async function(position){
        try{
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const response = await fetch (`https://api.weatherapi.com/v1/current.json?key=1a80e58d188c4c6bb92144153243006&q=${latitude},${longitude}`);
        
            const weatherData = await response.json(); 
            resolve(weatherData);
        }
        catch(error){reject("Erro al obtener info met");
        }
        },function(error){
            reject("Erro al obtener info met");
        });
    } 
    else {reject("Erro al obtener info met");   
    }    
    }
)}