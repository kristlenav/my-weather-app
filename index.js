let now = new Date();
let h3 = document.querySelector("h3");
let date = now.getDate();
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
h3.innerHTML = `${day}, ${month} ${date}, ${year}`;
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;
  search(searchInput.value);
}
function search(city) {
  let apiKey = "c2fda8d84eb4fa12e08ab6659668b7ee";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemp);
}
let form = document.querySelector("#search-city");
form.addEventListener("submit", searchCity);

function showTemp(response) {
  document.querySelector("h2").innerHTML = response.data.name;
  document.querySelector(".temperature").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
}
function showLocation(position) {
  let apiKey = "c2fda8d84eb4fa12e08ab6659668b7ee";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemp);
}
navigator.geolocation.getCurrentPosition(showLocation);

function showFarenheitTemp(event) {
  event.preventDefault();
  let farenheitTemp = (43 * 9) / 5 + 32;
  alert(farenheitTemp);
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = math.round(farenheitTemp);
}

let farenheitLink = document.querySelector("#heit");
farenheitLink.addEventListener("click", showFarenheitTemp);
