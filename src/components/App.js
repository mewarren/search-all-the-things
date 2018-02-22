import React, { Component } from 'react';
import './app.css';

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      result: null,
      total: 0,
      query: null,
      page: 1,
      loading: false
    };

  }
  
  render() {

    return (
      <div>
        <main>
          <div>Search goes here</div>
          <div>Search Summary</div>
          <div>Paging goes here</div>
          <div>List goes here</div>
        </main>
      </div>
    );
  }
}

