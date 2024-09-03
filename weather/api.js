const apiKey = "87b23f267f58a47c0c8f8398124b2588";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weathericon = doc.querySelector('.weather-icon');

async function checkweather(city) {
    const response = await fetch(apiUrl + city +`&appid =${apiKey}` );
    var data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/hr';

    if(data.weather[0].main == 'Clouds'){
        weathericon.src = 'img/Clouds.png'
    }

    else if(data.weather[0].main == 'Clear'){
        weathericon.src = 'img/clear.png'
    }
    else if(data.weather[0].main == 'Rain'){
        weathericon.src = 'img/rain.png'
    }
    else if(data.weather[0].main == 'Drizzle'){
        weathericon.src = 'img/drizzle.png'
    }
    else if(data.weather[0].main == 'Mist'){
        weathericon.src = 'img/mist.png'
    }


}

searchbtn.addEventListener('click', ()=>{
    checkweather(searchbox.value);
})
