import React from 'react';

export default class WeatherInfo extends React.Component{

  render(){
    return (
      <div className='card border-info mb-3'>
        <div className='card-header text-white bg-info'>City Information</div>
        <div className='card-body text'>
          <div className='row'>
            <div className='col-12 text-center'>City Name</div>
            <div className='col-4'>
              <h6>Temperature (F)</h6>
              <div>~~F</div>
            </div>
            <div className='col-4'>
              <h6>Pressure</h6>
              <div>~~F</div>
            </div>
            <div className='col-4'>
              <h6>Humidity</h6>
              <div>~~F</div>
            </div>
            <div className='col-4'>
              <h6>Lowest Temp (F)</h6>
              <div>~~F</div>
            </div>
            <div className='col-4'>
              <h6>Highest Temp (F)</h6>
              <div>~~F</div>
            </div>
            <div className='col-4'>
              <h6>Wind Speed</h6>
              <div>~~F</div>
            </div>

          </div>
        </div>
      </div>
    );
  };
}