import React from 'react';
import SearchEntries from './components/Search';
import HistoryInfo from './components/HistoryInfo'
import WeatherInfo from './components/WeatherInfo'

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='display-3 text-center'>
            <h2>Weather App</h2>
            <h6>whether it would rain or not</h6>
        </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchEntries />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <WeatherInfo />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <HistoryInfo />
          </div>
      </div>
    );
  }
}
