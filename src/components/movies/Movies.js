import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Movie from './movie/Movie';

export default class Movies extends Component{

  static propTypes = {
    movies: PropTypes.array.isRequired,
    loadDetails: PropTypes.func.isRequired
  }; 

  render(){
    const { movies, loadDetails } = this.props;

    return (
      <ul>
        {movies.map((movie, i) => (
          <Movie key={i} movie={movie} loadDetails={loadDetails}/>
        ))}
      </ul>
    );

  }
}