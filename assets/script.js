// Functions to pull OpenWeatherMap data

var weatherData;
var request = new XMLHttpRequest();
var date = new Date();

loadData();

function loadData() {
    let url = 'http://api.openweathermap.org/data/2.5/forecast?q=Layton,us&units=imperial&appid=59d980accd13058abc9c877e35b141c1';
    request.open('GET', url, true);
    request.onload = loadComplete;
    request.send();
}


function loadComplete(evt) {
    weatherData = JSON.parse(request.responseText);
    console.log(weatherData);
    let currentWeather = weatherData.list[0];
    let newList = weatherData.list.filter(item => item.dt_txt.includes('12:00:00'));
    console.log(newList);
    newList.unshift(currentWeather);
    console.log(newList);


    
    function updatingData() {
        let layton;
        let weatherDate;
        let listWeatherMain;
        let listWeatherDescript;  
        let listMainTemp;
        let windSpeed;
        let pressure;
        let humidity;

        let info;

        let days = new Array(6);
        let date;
        let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        for(i=0; i< days.length; i++){
            date = new Date(newList[i].dt_txt);

            layton = weatherData.city.name;
            weatherDate = month[date.getMonth() % 12]+' '+date.getDate() + ' ' +weekday[date.getDay() % 7];
            weatherDay = weekday[date.getDay() % 7];
            listWeatherMain = newList[i].weather[0].icon;
            listWeatherDescript = newList[i].weather[0].description;  
            listMainTemp = newList[i].main.temp;
            windSpeed = newList[i].wind.speed;
            pressure = newList[i].main.pressure;
            humidity = newList[i].main.humidity;

            info = [layton, weatherDate, listWeatherMain, listWeatherDescript, listMainTemp, windSpeed, pressure, humidity, weatherDay];

            days[i] = info;
        }
        console.log(days);
        console.log(days[0]);
    
        
        let data;
        let img;
        for(i=0; i<days.length; i++){
            data = days[i];
            img = data[2];

            document.getElementById(`place${i}`).innerHTML = data[0];
            document.getElementById(`date${i}`).innerHTML = data[1];
            document.getElementById(`currentTemp${i}`).innerHTML = Math.round(data[4])+'°';
            document.getElementById(`windSpeed${i}`).innerHTML = `<img class='img' src='/assets/img/wind-speed.png'/>` + ' ' + Math.round(data[5])+' mph';
            document.getElementById(`pressure${i}`).innerHTML = `<img class='img' src='/assets/img/pressure.png'/>` + ' ' + data[6]+' hpa';
            document.getElementById(`humidity${i}`).innerHTML = `<img class='img' src='/assets/img/humidity.png'/>` + ' ' + data[7]+' %';
            document.getElementById(`conditions${i}`).innerHTML = `<img id='weatherIcon' src='http://openweathermap.org/img/w/${img}.png'/>`;
            document.getElementById(`conditionsDesc${i}`).innerHTML = data[3];


        
            document.getElementById(`week1${i}`).innerHTML = data[8];
            document.getElementById(`weekConditions1${i}`).innerHTML = `<img src='http://openweathermap.org/img/w/${img}.png'/>`;
            document.getElementById(`weekTemp1${i}`).innerHTML = Math.round(data[4])+' °';

        }

    }

    updatingData();

}

// Functions to navigate the week forecast

function navigationOne() {
    document.getElementById('dayOne').style.display = 'grid';
    document.getElementById('dayTwo').style.display = 'none';
    document.getElementById('dayThree').style.display = 'none';
    document.getElementById('dayFour').style.display = 'none';
    document.getElementById('dayFive').style.display = 'none';
    document.getElementById('daySix').style.display = 'none';

    document.getElementById('forecastOne').style.borderTop = 'solid 5px #4D6466';
    document.getElementById('forecastTwo').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastThree').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastFour').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastFive').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastSix').style.borderTop = 'solid 1px #789E9E';

}

function navigationTwo() {
    document.getElementById('dayOne').style.display = 'none';
    document.getElementById('dayTwo').style.display = 'grid';
    document.getElementById('dayThree').style.display = 'none';
    document.getElementById('dayFour').style.display = 'none';
    document.getElementById('dayFive').style.display = 'none';
    document.getElementById('daySix').style.display = 'none';

    document.getElementById('forecastOne').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastTwo').style.borderTop = 'solid 5px #4D6466';
    document.getElementById('forecastThree').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastFour').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastFive').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastSix').style.borderTop = 'solid 1px #789E9E';
}

function navigationThree() {
    document.getElementById('dayOne').style.display = 'none';
    document.getElementById('dayTwo').style.display = 'none';
    document.getElementById('dayThree').style.display = 'grid';
    document.getElementById('dayFour').style.display = 'none';
    document.getElementById('dayFive').style.display = 'none';
    document.getElementById('daySix').style.display = 'none';

    document.getElementById('forecastOne').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastTwo').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastThree').style.borderTop = 'solid 5px #4D6466';
    document.getElementById('forecastFour').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastFive').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastSix').style.borderTop = 'solid 1px #789E9E';
}

function navigationFour() {
    document.getElementById('dayOne').style.display = 'none';
    document.getElementById('dayTwo').style.display = 'none';
    document.getElementById('dayThree').style.display = 'none';
    document.getElementById('dayFour').style.display = 'grid';
    document.getElementById('dayFive').style.display = 'none';
    document.getElementById('daySix').style.display = 'none';

    document.getElementById('forecastOne').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastTwo').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastThree').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastFour').style.borderTop = 'solid 5px #4D6466';
    document.getElementById('forecastFive').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastSix').style.borderTop = 'solid 1px #789E9E';
}

function navigationFive() {
    document.getElementById('dayOne').style.display = 'none';
    document.getElementById('dayTwo').style.display = 'none';
    document.getElementById('dayThree').style.display = 'none';
    document.getElementById('dayFour').style.display = 'none';
    document.getElementById('dayFive').style.display = 'grid';
    document.getElementById('daySix').style.display = 'none';

    document.getElementById('forecastOne').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastTwo').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastThree').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastFour').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastFive').style.borderTop = 'solid 5px #4D6466';
    document.getElementById('forecastSix').style.borderTop = 'solid 1px #789E9E';
}

function navigationSix() {
    document.getElementById('dayOne').style.display = 'none';
    document.getElementById('dayTwo').style.display = 'none';
    document.getElementById('dayThree').style.display = 'none';
    document.getElementById('dayFour').style.display = 'none';
    document.getElementById('dayFive').style.display = 'none';
    document.getElementById('daySix').style.display = 'grid';

    document.getElementById('forecastOne').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastTwo').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastThree').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastFour').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastFive').style.borderTop = 'solid 1px #789E9E';
    document.getElementById('forecastSix').style.borderTop = 'solid 5px #4D6466';
}
