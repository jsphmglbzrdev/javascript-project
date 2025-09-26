


document.addEventListener('DOMContentLoaded', () => {
	const inputCity = document.getElementById('inputCity');
	const getWeatherBtn = document.getElementById('getWeather');
	const cityName = document.getElementById('cityName');
	const weatherInfo = document.getElementById('weatherInfo');
	const temperature = document.getElementById('temperature');
	const description = document.getElementById('description');
	const errorMessage = document.getElementById('errorMessage');

	const API_KEY = 'b24d33491ff774c54886ee232042513f'



	getWeatherBtn.addEventListener('click', async () => {
		const city = inputCity.value.trim();

		if(!city) return;

		try{
			const cityData = await fetchWeather(city)
			displayWeather(cityData)
		}catch(err){

			displayError('Could not fetch weather data. Please try again later.');
		}

	})
	
	async function fetchWeather(city) {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

		const response = await fetch(url);

		console.log(typeof response);
		console.log(response)

		if(!response.ok){
			throw new Error('Network response was not ok');
		}

		const data = await response.json();

		return data;
	}


	function displayWeather(data) {

		const {name, weather, main} = data;
		weatherInfo.style.display = 'block';

		cityName.textContent = name;
		temperature.textContent = main.temp + '°C';
		description.textContent = weather[0].description;
		console.log(data)
	}

	function displayError(message) {
		errorMessage.textContent = message;
		errorMessage.style.display = 'block';
	}

})