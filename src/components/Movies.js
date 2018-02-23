import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Movies extends Component {

  static propTypes = {
    movies: PropTypes.object.isRequired,
  }  

  render(){
    const { title, year, poster } = this.props.movies;
    return(
      <div>
        <ul>
          <li>
            
          </li>
        </ul>
      </div>

    );

  }

}