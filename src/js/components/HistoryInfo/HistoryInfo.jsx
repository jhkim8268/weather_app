import React from 'react';

export default class HistoryInfo extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='card border-info mb-3'>
        <div className='card-header text-white bg-info'>Search History</div>
        <div className='card-body'>
          <div className='container'>
            <div className='row'>
              <div className='col-6 text-left'>
                San Diego
              </div>
              <div className='col-6 text-right'>
                09/01/2018 19:04:46
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}