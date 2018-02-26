import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './paging.css';

export default class Paging extends Component {

  static propTypes ={
    resultTotal: PropTypes.number.isRequired,
    // page: PropTypes.number.isRequired,
    newPage: PropTypes.func.isRequired,
  };

  state = {
    page: 1
  };

  setArray(array) {
    let pageArray = [];
    for(let i = 0; i < array.length; i ++){
      pageArray.push(i + 1);
    }
    return pageArray;
  }
  
  handlePage = async({ target }) => {
    await this.setState({ page: target.id });
    await this.props.newPage(this.state.page);
  };
  
  render() {
    const { resultTotal } = this.props;
    const totalPages = new Array(Math.ceil(resultTotal / 10));
    const pageArray = this.setArray(totalPages);
  
    return (
      <div>
        <ul className="pages">Page {pageArray.map(i => (
          <li onClick={this.handlePage} key={i} id={i}>{i}</li>
        ))}</ul>
      </div>
    );
  }
}
