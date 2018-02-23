import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './movies.css';

export default class Movies extends Component {

  static propTypes = {
    movies: PropTypes.object.isRequired,
  };  

  render(){
    const { title, year, poster } = this.props.movies;
    
    return (
      <div>
        <ul>
          <li>
            <h2>{title}</h2>
            <h3>{year}</h3>
            <img src={poster}/>
          </li>
        </ul>
      </div>

    );

  }

}