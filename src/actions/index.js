import axios from 'axios';

const API_KEY = '65350b06e7cc6faab2216e0be264fa3d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action Creator: 
export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	// Returns Action: 
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}