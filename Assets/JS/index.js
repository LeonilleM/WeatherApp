const onChange = document.getElementById("citySearch");
var x = ""
onChange.addEventListener("change", function myFunction() {
        x = document.getElementById("citySearch").value;
        document.getElementById("cityWeather").innerHTML = x;
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' 
        + x + '&appid=8d1b5d2eb6171db9fdebde88fa9e5780')
        .then(function(response){
            return response.json();

        })
        .then(function(response){
            
            var fTemp = Math.round(((response.main.temp-273.15)*9/5+32)*10)/10
            let temp = fTemp + "°F";
            var conditionTemp = (response.weather[0].description);
            function toTitleCase(str) {
                return str.replace(/\w\S*/g, function(txt){
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                });
            }
            let conditions = toTitleCase(conditionTemp);
            var windTemp = Math.round(((response.wind.speed)*2.237)*10)/10
            let windSpeed = windTemp + " MPH"
            let humidity = `
                ${response.main.humidity}
            `;
            document.getElementById("temperature").innerHTML = temp;
            document.getElementById("conditions").innerHTML = conditions;
            document.getElementById("wind").innerHTML = windSpeed;
            document.getElementById("humidity").innerHTML = humidity;
        })
})
