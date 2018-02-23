import React, { Component } from 'react';
import './app.css';
import Search from './Search';
import  { searchApi } from '../services/movieApi';
import Movies from './Movies';

export default class App extends Component {

  constructor(){
    super();

    // this.handleSearch = this.handleSearch.bind(this);
    this.searchMovies = this.searchMovies.bind(this);

    
    

    this.state = {
      movies: null,
      total: 0,
      query: null,
      page: 1,
      loading: false
    };
  }
  
  searchMovies = () => {
    searchApi(this.state.query)
      .then(results => this.setState(
        { movies: results.Search, 
          total: results.Search.length 
        })
      );
  };
    
  handleSearch = (value) => {
    this.setState(
      { query: value }, 
      this.searchMovies  
    );
  };
  
  render() {
    const { query, total, movies } = this.state;
    return (
      <div>
        <main>
          <header>
            <h1>Movie Search</h1>
          </header>
          <Search onSearch={this.handleSearch}/>

          <div>Your search for {query} returned {total} results.</div>
          <div>Paging goes here</div>
          {/* {movies && (
            <div>
              <Movies movies={movies}/>
            </div>
          )} */}
        </main>
      </div>
    );
  }
}

