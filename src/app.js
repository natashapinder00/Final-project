function formatDate(timestamp) {
  let date = new Date(timestamp);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[date.getDay()];
  return `${day} ${formatHours(timestamp)}`;
}

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}
    


function displayTemperature(response) {

    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement =document.querySelector("#description");
    let dateElement = document.querySelector("#date");
    
   
   
    cityElement.innerHTML = response.data.name;
    temperatureElement.innerHTML = Math.round (celciusTemperature);
    descriptionElement.innerHTML = response.data.weather[0].description;
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    
  
}

let apiKey = "d2b8a0db5e85065ca5e0d9c6fb59f04a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);

console.log(apiUrl);