import React, { Component } from 'react';
import './app.css';
import Search from './Search';
import  { searchApi } from '../services/movieApi';
import Movies from './movies/Movies';
import Paging from './Paging';
import Detail from './movies/movie/Detail';

export default class App extends Component {

  constructor(){
    super();

    this.searchMovies = this.searchMovies.bind(this);

    this.state = {
      movies: [],
      pageTotal: 0,
      resultTotal: 0,
      query: null,
      page: 1,
      loading: false,
      error: null
    };
  }
  
  searchMovies = () => {
    this.setState({ loading: true, error: null });
    const { query, page } = this.state;
    searchApi(query, page)
      .then(results => {
        console.log(results);
        const totalResults = parseInt(results.totalResults);
        this.setState(
          { movies: results.Search, 
            pageTotal: results.Search.length,
            resultTotal: totalResults
          });
      },
      error => this.setState({ error }))
      .then(() => {
        this.setState({ loading: false });
      });
  };

  newPage = (value) => {
    this.setState({ page: value }),
    this.searchMovies();  
  };

  handleSearch = (value) => {
    this.setState(
      { query: value }, 
      this.searchMovies,  
    );
  };
    
  render() {
    const { query, pageTotal, resultTotal, movies, loading, page } = this.state;
    return (
      <div>
        <main>
          <header>
            <h1>Movie Search</h1>
          </header>
          <Search onSearch={this.handleSearch}/>
          <div>{loading && 'Loading...'}</div>
          <div>Here are the results of your search for &quot;{query}&quot;. Showing {pageTotal} of {resultTotal} results.</div>
          <Paging resultTotal={resultTotal} newPage={this.newPage} page={page}/>
          <div>
            <Movies movies={movies}/>
          </div>
          <div>
            <Detail/>
          </div>
        </main>
      </div>
    );
  }
}

