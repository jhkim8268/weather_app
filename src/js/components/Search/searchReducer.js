const defaultState = {
  // id: 0,
  name: '',
  cityName: '',
  time: '',
  temperature: '',
  pressure: '',
  humidity: '',
  lowestTemp: '',
  hightestTemp: '',
  windSpeed: '',
  cityLists: []
}

export default function searchReducer(state=defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'BUTTON_FULFILLED': {
      return {
        ...state,
        name: '',
        cityName: payload.data.name,
        time: new Date(),
        temperature: payload.data.main.temp + 'F',
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity + '%',
        lowestTemp: payload.data.main.temp_min + 'F',
        hightestTemp: payload.data.main.temp_max + 'F',
        windSpeed: payload.data.wind.speed + 'mph',
        cityLists: [
          ...state.cityLists,
          [payload.data.name, new Date().toLocaleString()
          ]
        ]
      }
    }

    case 'CITY_NAME': {
      return {
        ...state,
        name: payload.name
      }
    }

    case 'GET_WEATHER_FULFILLED': {
      return {
        ...state,
        name: '',
        cityName: payload.data.name,
        time: new Date(),
        temperature: payload.data.main.temp + 'F',
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity + '%',
        lowestTemp: payload.data.main.temp_min + 'F',
        hightestTemp: payload.data.main.temp_max + 'F',
        windSpeed: payload.data.wind.speed + 'mph',
        cityLists: [
          ...state.cityLists,
          [payload.data.name, Date()]
        ]
      }
    }

    default: {
      return state;
    }
  }
}