import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './paging.css';

export default class Paging extends Component {

  static propTypes ={
    resultTotal: PropTypes.string.isRequired,
  };

  // state = {
  //   resultTotal: 'string'
  // };

  // pageCount = ({ this.props.resultTotal }) => {

  // }

  render() {
    let pages = this.props;
    console.log('Total results:', pages);
    const { resultTotal } = Math.ceil(parseInt(pages));
    console.log('Total pages:', { resultTotal });

    return (
      <div>
        <p>prev</p>
        <p>{resultTotal}</p>
        <p>next</p>
      </div>
    );
  }
}

//TODO: Create paging by mapping totalResults and create <p> for each with page number</p>

//TODO: event listener to search api for page number thats clicked.