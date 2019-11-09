import React from 'react';
import axios from 'axios';

export default class Header extends React.Component {

   handleSubmit = (e) => {
    e.preventDefault();

    if(this.props.isToggle === true){
      this.props.toggleForecast();
    }

    if(this.props.isDetails === true){
      this.props.detailsToggle();
    }
    
    this.props.flagError(false);
    this.props.updateError('');
    this.props.updateLoading();
    
    axios.post('/search', {city: this.props.input})
    .then(res => {
      this.props.updateLoading();
      if(res.data === 'error'){
        this.props.flagError(true);
        this.props.updateError('City does not exist');
        this.props.loadData(
          {'city': null,
        'datetime': null,
        'currenttemp': null,
        'lowtemp': null,
        'hightemp': null,
        'icon': null,
        'weather': null,
        'wind': null,
        'humidity': null,
        'pressure': null,
        'visibility': null,
        'sunrise': null,
        'sunset': null
      });
        console.log(res.data);
      } else {
        this.props.loadData(res.data);
        this.props.submitClear();
      }
    })
    .catch(err => console.log('header error ', err));
  }

  render = () => (
    <div className='header'>
      <nav className='navbar'>
        <div className='d-flex justify-content-center w-100' id='nav-container'>
          <div className='row w-100'>
            <div className='col-md-6 col-sm-12 d-flex justify-content-center'>
              <a href='/'>
              <p className='navbar-brand' id='logo-text'> 
              <i className='wi wi-sunrise' id='logo-icon'></i>
              &nbsp;Weather </p>
              </a>
            </div>
            <div className='col-md-6 col-sm-12'>
              <form className='form-inline d-flex justify-content-center' onSubmit={e => this.handleSubmit(e)}>
                <div className='input-group' id='input'>
                <input placeholder='City or Zipcode' aria-label='Search' 
                onChange={ e => this.props.onKeyup(e)} 
                value={this.props.input} id='search-input' required/>
                  <div className='input-group-append'>
                    <button className='btn'  id='search-btn' type='submit' >Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}