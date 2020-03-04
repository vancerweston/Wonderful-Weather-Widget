var weatherData;
var request = new XMLHttpRequest();
var date = new Date();

loadData();

function loadData() {
    let url = 'http://api.openweathermap.org/data/2.5/forecast?q=Layton,us&appid=59d980accd13058abc9c877e35b141c1';
    request.open('GET', url, true);
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    weatherData = JSON.parse(request.responseText);
    console.log(weatherData);
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

        let days = new Array(40);
        let date;
        let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        for(i=0; i< days.length; i++){
            date = new Date(weatherData.list[i].dt_txt);

            layton = weatherData.city.name;
            weatherDate = weekday[date.getDay()]+'/'+date.getDay()+'/'+date.getFullYear()+'<br/>'+date.getHours()+':'+date.getMinutes()+'0';
            listWeatherMain = weatherData.list[i].weather[0].icon;
            listWeatherDescript = weatherData.list[i].weather[0].description;  
            listMainTemp = weatherData.list[i].main.temp;
            windSpeed = weatherData.list[i].wind.speed;
            pressure = weatherData.list[i].main.pressure;
            humidity = weatherData.list[i].main.humidity;
            search = new Date(weatherData.list[i].dt_txt);

            info = [layton, weatherDate, listWeatherMain, listWeatherDescript, listMainTemp, windSpeed, pressure, humidity, search];

            days[i] = info;
        
            console.log(days[i][8]);
            console.log(JSON.stringify(days[i][8]));
            


            //JSON.stringify(days[i][8]) is var search. Which gives us the dt_txt of 
            //  each object per 3 hours. I need to find a way to get the time out of 
            //  days[i][8] (12:00:00) and then write an if statement for only 12. 
            //  I want to then assign that array to an array called week and then push 
            // week to the html. Struggling on how to grab just the time from days[i][8].
            // Use a for loop with an if statement, if true assign to week. Then update 
            // code below.


        }
        
        

        // for(i=0; i<days.length; i++){
        //     if(){
        //         console.log(`It worked for ${i}`);
        //     }else{
        //         console.log('It didnt work');
        //     }
        
        // }
        
        let data;
        let img;
        let week = new Array(5);

        for(i=0; i<week.length; i++){
            data = days[i];
            img = data[2];

            document.getElementById(`place${i}`).innerHTML = data[0];
            document.getElementById(`day${i}`).innerHTML = data[1];
            document.getElementById(`currentTemp${i}`).innerHTML = data[4];
            document.getElementById(`windSpeed${i}`).innerHTML = data[5];
            document.getElementById(`pressure${i}`).innerHTML = data[6];
            document.getElementById(`humidity${i}`).innerHTML = data[7];
            document.getElementById(`conditions${i}`).innerHTML = `<img src='http://openweathermap.org/img/w/${img}.png'/>`;
            document.getElementById(`conditionsDesc${i}`).innerHTML = data[3];


            //         <div id="place0"></div>
            //         <div id="day0"></div>
            //         <div id="currentTemp0"></div>
            //         <div id='windSpeed0'></div>
            //         <div id='pressure0'></div>
            //         <div id='humidity0'></div>
            //         <div id="conditions0"></div>
            //         <div id="conditionsDesc0"></div>

            // document.getElementById(`currentTemp${i}`).innerHTML = data[2];
            // document.getElementById(`conditions${i}`).innerHTML = data[3];
            // document.getElementById(`conditionsDesc${i}`).innerHTML = data[4];
            // document.getElementById(`windSpeed${i}`).innerHTML = data[5];
            // document.getElementById(`pressure${i}`).innerHTML = data[6];
            // document.getElementById(`humidity${i}`).innerHTML = data[7];
        
            // document.getElementById(`place1${i}`).innerHTML = data[0];
            // document.getElementById(`day1${i}`).innerHTML = data[1];
            // document.getElementById(`currentTemp1${i}`).innerHTML = data[2];
            // document.getElementById(`conditions1${i}`).innerHTML = data[3];
            // document.getElementById(`conditionsDesc1${i}`).innerHTML = data[4];
            // document.getElementById(`windSpeed1${i}`).innerHTML = data[5];
            // document.getElementById(`pressure1${i}`).innerHTML = data[6];
            // document.getElementById(`humidity1${i}`).innerHTML = data[7];

        }

    }

    updatingData();

}



