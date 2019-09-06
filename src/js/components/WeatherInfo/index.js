import { connect } from 'react-redux';
import WeatherInfo  from './WeatherInfo';

function mapStoreToProps(store) {
  return {
    cityName: store.search.cityName,
    temperature: store.search.temperature,
    pressure: store.search.pressure,
    humidity: store.search.humidity,
    lowestTemp: store.search.lowestTemp,
    hightestTemp: store.search.hightestTemp,
    windSpeed: store.search.windSpeed,
  };
}

export default connect(mapStoreToProps)(WeatherInfo);