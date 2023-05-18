// 30544d7174b0fdf09c88e053f23970c7

// https://api.openweathermap.org/data/2.5/weather?q=New York&appid=30544d7174b0fdf09c88e053f23970c7
//https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=30544d7174b0fdf09c88e053f23970c7&units=metric

const apiKey = "30544d7174b0fdf09c88e053f23970c7";
const apiURL =
	"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
	const response = await fetch(apiURL + city + `&appid=${apiKey}`);
	
	if (response.status == 404) {
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	} else {
			var data = await response.json();

			document.querySelector(".temp").innerHTML =
				Math.round(data.main.temp) + "°C";
			document.querySelector(".humidity").innerHTML = data.main.humidity;
			document.querySelector(".wind").innerHTML = data.wind.speed;
			document.getElementById("cidade").innerHTML = data.name;

			if (data.weather[0].main == "Clouds") {
				weatherIcon.src = "imgs/clouds.png";
			} else if (data.weather[0].main == "Clear") {
				weatherIcon.src = "imgs/clear.png";
			} else if (data.weather[0].main == "Rain") {
				weatherIcon.src = "imgs/rain.svg";
			} else if (data.weather[0].main == "Drizzle") {
				weatherIcon.src = "imgs/drizzle.png";
			} else if (data.weather[0].main == "Mist") {
				weatherIcon.src = "imgs/mist.png";
			} else if (data.weather[0].main == "Snow") {
				weatherIcon.src = "imgs/snow.png";
			}
			
		document.querySelector(".weather").style.display = "block";
		document.querySelector(".error").style.display = "none";
	}
	

}


var input = document.querySelector(".search input");
input.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		document.querySelector(".search button").click();
	}
});

searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
});

