function getDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

let timeDate = document.querySelector("#date");
let now = new Date();
timeDate.innerHTML = getDate(now);

function search(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city");
  let cityInput = document.querySelector("#input-city");
  let apiKey = "6a5dc688bf3a620c66a5ade46e7c7c11";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=${apiKey}`;
  cityName.innnerHTML = cityInput.value;
}
axios.get(apiUrl).then(displayTemperature);

function displayTemperature(Response) {
  let temperature = Math.round(Response.data.main.temp);
  document.querySelector("#main-temperature").innerHTML = `${temperature}`;
  cityName.innerHTML = Response.data.name;
  document.querySelector("#max-temp").innerHTML = Math.round(
    Response.data.main.temp_max
  );
  document.querySelector("#min-temp").innerHTML = Math.round(
    Response.data.main.temp_min
  );
  document.querySelector("#main-weather").innerHTML =
    Response.data.weather[0].main;
}
axios.get(apiUrl).then(displayTemperature);

function getCurrentLocation(position) {
  let apiKey = "6a5dc688bf3a620c66a5ade46e7c7c11";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayTemperature);
}

function displayCurrentWeather(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCurrentLocation);
}

let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", displayCurrentWeather);

// function fahrenheitDegrees(event) {
//   event.preventDefault();
//   let temperature = document.querySelector("#main-temperature");
//   let mainTemperature = temperature.innerHTML;
//   mainTemperature = Number(mainTemperature);
//   temperature.innerHTML = Math.round((mainTemperature * 9) / 5 + 32);
// }

// let fahrenheitTemperature = document.querySelector("#fahrenheit-link");
// fahrenheitTemperature.addEventListener("click", fahrenheitDegrees);
// let celsiusTemperature = document.querySelector("#celsius-link");
// celsiusTemperature.addEventListener("click", celsiusDegrees);

// function fahrenheitDegrees(event) {
//   event.preventDefault();
//   let temperature = document.querySelector("#main-temperature");
//   let mainTemperature = temperature.innerHTML;
//   mainTemperature = Number(mainTemperature);
//   temperature.innerHTML = Math.round((mainTemperature * 9) / 5 + 32);
// }
