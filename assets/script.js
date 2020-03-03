var weatherData;
var request = new XMLHttpRequest();
var date = new Date();

loadData();

function loadData() {
    let url = 'http://api.openweathermap.org/data/2.5/forecast?q=Salt+Lake+City,us&units=imperial&cnt=5&appid=59d980accd13058abc9c877e35b141c1';
    request.open('GET', url, true);
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    weatherData = JSON.parse(request.responseText);

    function updatingData() {
        let slc;
        let weatherDate;
        let listWeatherMain;
        let listWeatherDescript;  
        let listMainTemp;

        let info;

        let days = [1, 2, 3, 4, 5];


        for(i=0; i< days.length; i++){
            slc = weatherData.city.name;
            weatherDate = (date.getMonth()+1) + "/" + (date.getDate()+i);
            listWeatherMain = weatherData.list[i].weather[0].main;
            listWeatherDescript = weatherData.list[i].weather[0].description;  
            listMainTemp = weatherData.list[i].main.temp;

            info = [slc, weatherDate, listWeatherMain, listWeatherDescript, listMainTemp];

            days[i] = info;            
            
        }
        console.log(days);

        // days now equals 5 'days' of weather info. I now need to use a for loop or another
        //      way to push that info where it needs to go in the HTML.

    }

    updatingData();

}



