import React from 'react';
import {
  buttonClick,
  searchCity,
  getWeather
} from './searchActions'


export default class SearchEntries extends React.Component {
  constructor(props){
    super(props);
    
    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleChangeCityName = this.handleChangeCityName.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
  };

  handleClickButton(e){
    const { dispatch } = this.props;
    const name  = e.target.value;
    dispatch(buttonClick(name));
  }

  handleChangeCityName(e){
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(searchCity(value));
  }

  handleClickSearch(e){
    e.preventDefault();
    const { dispatch, name } = this.props;
    dispatch(getWeather(name));
  }

  render() {
    const { name, selectedCities } = this.props;

    return (
      <div className='form-group border-light mb-3'>
        <div className="btn-group" role="group" >
          <button type="button" className="btn btn-info btn-sm" value = 'San Diego' onClick = { this.handleClickButton }>San Diego</button>
          <button type="button" className="btn btn-info btn-sm" value = 'New York' onClick = { this.handleClickButton }>New York</button>
          <button type="button" className="btn btn-info btn-sm" value = 'Oklahoma City' onClick = { this.handleClickButton }>Oklahoma City</button>
        </div>
        <form className='form-inline'>
          <div className="search">
            <input 
              type="text" 
              className="form-control input-sm" 
              maxLength="64" 
              placeholder="Search"
              value = { name } 
              onChange = { this.handleChangeCityName }
            />
            <button 
              type="submit" 
              className="btn btn-primary btn-sm"
              onClick = { this.handleClickSearch}
            >Search</button>
          </div>
        </form>
      </div>
    );
  }
}
