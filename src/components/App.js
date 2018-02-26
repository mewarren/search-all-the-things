import React, { Component } from 'react';
import './app.css';
import Search from './Search';
import  { searchApi } from '../services/movieApi';
import Movies from './Movies';

export default class App extends Component {

  constructor(){
    super();

    this.searchMovies = this.searchMovies.bind(this);

    this.state = {
      movies: [],
      pageTotal: 0,
      resultTotal:0,
      query: null,
      page: 1,
      loading: false
    };
  }
  
  searchMovies = () => {
    searchApi(this.state.query)
      .then(results => {
        console.log(results);
        this.setState(
          { movies: results.Search, 
            pageTotal: results.Search.length,
            resultTotal: results.totalResults
          });
      });
  };
    
  handleSearch = (value) => {
    this.setState(
      { query: value }, 
      this.searchMovies  
    );
  };
  
  render() {
    const { query, pageTotal, resultTotal, movies } = this.state;
    return (
      <div>
        <main>
          <header>
            <h1>Movie Search</h1>
          </header>
          <Search onSearch={this.handleSearch}/>

          <div>Here are the results of your search for {query}. Showing {pageTotal} of {resultTotal} results.</div>
          <div>Paging goes here</div>
          <div>
            <Movies movies={movies}/>
          </div>
        </main>
      </div>
    );
  }
}

