import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';

export default class Movies extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired,
    loadDetails: PropTypes.func.isRequired
  };  

  showDetail = ({ target }) => {
    this.props.loadDetails(target.id);
  };

  render(){
    const { Title, Year, Poster, imdbID } = this.props.movie;
    // let poster = { Poster };
    // if(poster === 'N/A') {
    //   return poster = './no-image.jpg';
    // }
    // console.log(poster);
    return (
      <div>        
        <li className="movie">
          <img src={Poster}/>
          <div className="movie-detail">
            <h2 id={imdbID} onClick={this.showDetail}>{Title}</h2>
            <h3>{Year}</h3>
          </div>
        </li>       
      </div>
    );
  }
}

//TODO add click event to navigate to detail page
