import React, { Component } from 'react';
import './app.css';
import Search from './Search';
import  { searchApi } from '../services/movieApi';

export default class App extends Component {

  constructor(){
    super();

    // this.handleSearch = this.handleSearch.bind(this);
    this.searchMovies = this.searchMovies.bind(this);

    
    

    this.state = {
      result: null,
      total: 0,
      query: null,
      page: 1,
      loading: false
    };
  }
  
  searchMovies = () => {
    searchApi(this.state.query)
      .then(results => this.setState({ result: results.Search }));
  };
    
  handleSearch = (value) => {
    this.setState(
      { query: value }, 
      this.searchMovies  
    );
  };
  
  render() {

    return (
      <div>
        <main>
          <header>This is the header</header>
          <Search onSearch={this.handleSearch}/>
          <p>{ this.state.query }</p>

          <div>Search Summary</div>
          <div>Paging goes here</div>
          <div>List goes here</div>
        </main>
      </div>
    );
  }
}

