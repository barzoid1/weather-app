const getWeather = (city) => {
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '250115e2d5msh89408028a8c6263p1bb87ejsna627d095089c',
		'X-RapidAPI-Host': 'bestweather.p.rapidapi.com'
	}
};

return fetch(`https://bestweather.p.rapidapi.com/weather/${city}/today?unitGroup=us`, options)
	.then(response => response.json())
	.then(response => response)
	.catch(err => err);
}
const searchCity = async() => {
	const city = document.getElementById('city-input').value
const data = await getWeather(city)	
showData(data)
}

const showData = (weather) => {
	document.getElementById('city-name').innerText = weather.address
	document.getElementById('weather-type').innerText = weather.currentConditions.conditions
	document.getElementById('temp').innerText = weather.currentConditions.temp
	document.getElementById('min-temp').innerText = weather.days[0].tempmin
	document.getElementById('max-temp').innerText = weather.days[0].tempmax
}
