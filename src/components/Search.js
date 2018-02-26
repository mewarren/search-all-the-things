import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './search.css';

export default class Search extends Component {
 
  static propTypes = {
    onSearch: PropTypes.func.isRequired,

  };

  state = {
    search: '',
    list: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { search } = this.state;
    if(!search.trim()) return;
    this.props.onSearch(search);
    this.collaspeSearch();
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  collaspeSearch = () => {
    this.setState({ list: 'searchv' });
  };

  render() {
    const { search, list } = this.state;
    // if({list}) setState
    return (
      <form className={styles.search} id={list} onSubmit={this.handleSubmit}>
        <label>
          Search For Movies:
          <input value={search} onChange={this.handleChange}/>
        </label>
        <button className="search-b">Search</button>
      </form>
    );
  }
}
