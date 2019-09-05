let nextSearchId = 0;
let cityName = Seoul;

export function getWeather(inputValue) {
    return {
      type: 'GET_WEATHER',
      payload: axios.get(`/weather/${inputValue}`)
    };
  }