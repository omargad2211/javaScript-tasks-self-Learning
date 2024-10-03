const apiKey = `636f6472cd0c4a74c1e4b59c11c9feed`;
const baseURL = `https://api.openweathermap.org/data/2.5/weather?`;

const cityName = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const img = document.querySelector(".weather-info img");
const weather = document.querySelector(".weather");
const errorMsg = document.querySelector(".error"); // Cache the error message element

const getWeatherData = async function (city) {
  try {
    const res = await fetch(`${baseURL}q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();
    console.log(data);
    if (data.cod === `404`) {
      errorMsg.style.display = "block";
      weather.style.display = "none"; // Hide the weather data if invalid city is entered
    } else {
      errorMsg.style.display = "none"; // Hide the error message on valid data
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = `${data.main.temp}°C`;
      document.querySelector(".hum-deg").innerHTML = `${data.main.humidity}%`;
      document.querySelector(
        ".wind-deg"
      ).innerHTML = `${data.wind.speed} km/hr`;

      const condition = data.weather[0].main;
      console.log(condition);
      if (condition === "Clouds") {
        img.src = "./img/images/clouds.png";
      } else if (condition === "Clear") {
        img.src = "./img/images/clear.png";
      } else if (condition === "Rain") {
        img.src = "./img/images/rain.png";
      } else if (condition === "Drizzle") {
        img.src = "./img/images/drizzle.png";
      } else if (condition === "Mist") {
        img.src = "./img/images/mist.png";
      } else if (condition === "Snow") {
        img.src = "./img/images/snow.png";
      }

      weather.style.display = "block"; // Show the weather data on valid input
    }
  } catch (err) {
    console.error(err);
  }
};

searchbtn.addEventListener("click", function () {
  const city = cityName.value.toLowerCase();
  getWeatherData(city);
  cityName.value = "";
});
