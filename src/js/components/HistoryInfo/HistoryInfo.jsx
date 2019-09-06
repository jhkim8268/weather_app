import React from 'react';

export default class HistoryInfo extends React.Component {

  render(){
    const { cityLists }= this.props;
    return (
      <div className='card border-info mb-3'>
        <div className='card-header text-white bg-info'>Search History</div>
        <div className='card-body'>
          <div className='container'>
            <div className='row'>
              <div className='col-6 text-left'>
                { cityLists.map(cityList => (
                  <div>
                    <div>{cityList[0]} {cityList[1]}</div>
                    
                  </div>
                )) } 
              </div>
              <div className='col-6 text-right'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}