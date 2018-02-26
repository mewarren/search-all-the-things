import React, { Component } from 'react';
import './app.css';
import Search from './Search';
import  { searchApi } from '../services/movieApi';
import Movies from './Movies';
import Paging from './Paging';

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
      loading: false,
      error: null
    };
  }
  
  searchMovies = () => {
    this.setState( { loading: true, error: null });

    searchApi(this.state.query)
      .then(results => {
        console.log(results);
        
        this.setState(
          { movies: results.Search, 
            pageTotal: results.Search.length,
            resultTotal: results.totalResults,
          });
      },
      error => this.setState({ error }))
      .then(() => {
        this.setState({ loading: false });
      });
  };
    
  handleSearch = (value) => {
    this.setState(
      { query: value }, 
      this.searchMovies,  
    );
  };
  
  render() {
    const { query, pageTotal, resultTotal, movies, loading } = this.state;
    return (
      <div>
        <main>
          <header>
            <h1>Movie Search</h1>
          </header>
          <Search onSearch={this.handleSearch}/>
          <div>{loading && 'Loading...'}</div>
          {/* <div>Here are the results of your search for {query}. Showing {pageTotal} of {resultTotal} results.</div> */}
          <Paging resultTotal={resultTotal}/>
          <div>
            <Movies movies={movies}/>
          </div>
        </main>
      </div>
    );
  }
}

