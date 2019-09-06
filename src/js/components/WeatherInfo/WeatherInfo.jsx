import React from 'react';

export default class WeatherInfo extends React.Component{

  render(){
    const { cityName, temperature, pressure, humidity, lowestTemp, hightestTemp, windSpeed }=this.props;
    return (
      <div className='card border-info mb-3'>
        <div className='card-header text-white bg-info'>City Information</div>
        <div className='card-body text'>
          <div className='row'>
            <div className='col-12 text-center'>{cityName}</div>
            <div className='col-4'>
              <h6>Temperature(F)</h6>
              <div>{temperature} </div>
            </div>
            <div className='col-4'>
              <h6>Pressure</h6>
              <div>{pressure}</div>
            </div>
            <div className='col-4'>
              <h6>Humidity</h6>
              <div>{humidity}</div>
            </div>
            <div className='col-4'>
              <h6>Lowest Temp(F)</h6>
              <div>{lowestTemp}</div>
            </div>
            <div className='col-4'>
              <h6>Highest Temp(F)</h6>
              <div>{hightestTemp}</div>
            </div>
            <div className='col-4'>
              <h6>Wind Speed</h6>
              <div>{windSpeed}</div>
            </div>

          </div>
        </div>
      </div>
    );
  };
}