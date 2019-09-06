import axios from 'axios';


export function buttonClick(inputValue) {
	return{
		type: 'BUTTON',
		payload: axios.get(`/weather/${inputValue}`),
	};
}


export function searchCity(name) {
	return{
		type: 'CITY_NAME',
		payload: {name}
	};
}

export function getWeather(inputValue) {
	return {
		type: 'GET_WEATHER',
		payload: axios.get(`/weather/${inputValue}`),
	};
  }
