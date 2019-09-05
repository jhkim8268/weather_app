import React from 'react';

export default class SearchEntries extends React.Component {

  render() {
    return (
      <div className='form-group border-light mb-3'>
        <div className="btn-group" role="group" >
          <button type="button" className="btn btn-info btn-sm">San Diego</button>
          <button type="button" className="btn btn-info btn-sm">Los Angeles</button>
          <button type="button" className="btn btn-info btn-sm">DC</button>
          <button type="button" className="btn btn-info btn-sm">New York</button>
          <button type="button" className="btn btn-info btn-sm">Dallas</button>
          <button type="button" className="btn btn-info btn-sm">Oklahoma City</button>
        </div>
        <form className='form-inline'>
          <div className="search">
            <input type="text" className="form-control input-sm" maxLength="64" placeholder="Search" />
            <button type="submit" className="btn btn-primary btn-sm">Search</button>
          </div>
        </form>
      </div>
    );
  }
}
