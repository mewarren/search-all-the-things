import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';

export default class Movies extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired,
  };  

  render(){
    const { Title, Year, Poster } = this.props.movie;
    
    return (
      <div>        
        <li className="movie">
          <img src={Poster}/>
          <div className="movie-detail">
            <h2>{Title}</h2>
            <h3>{Year}</h3>
          </div>
        </li>       
      </div>
    );
  }
}