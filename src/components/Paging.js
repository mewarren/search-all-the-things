import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './paging.css';

export default class Paging extends Component {

  static propTypes ={
    resultTotal: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    newPage: PropTypes.func.isRequired,
  };

  setArray(array) {
    let pageArray = [];
    for(let i = 0; i < array.length; i ++){
      pageArray.push(i + 1);
    }
    return pageArray;
  }

  handlePage = ({ target }) => {
    const page = parseInt(target.id);
    this.props.newPage(page);
  };
  
  render() {
    const { resultTotal, page } = this.props;
    const totalPages = new Array(Math.ceil(resultTotal / 10));
    const pageArray = this.setArray(totalPages);
  
    return (
      <div>
        <ul className="pages">Page {pageArray.map(i => (
          <li className={(page === i) ? 'pageCur' : null}onClick={this.handlePage} key={i} id={i}>{i}</li>
        ))}</ul>
      </div>
    );
  }
}
