function displayTemperature(response) {
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round (response.data.main.temp);
    let descriptionElement =document.querySelector("#description");
descriptionElement.innerHTML = response.data.weather[0].description;

}

let apiKey = "d2b8a0db5e85065ca5e0d9c6fb59f04a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);