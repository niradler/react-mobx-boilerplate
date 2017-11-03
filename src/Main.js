import React, { Component } from 'react';
import {  Link } from 'react-router-dom'
class Main extends Component {

  render() {
     return (
      <div className="Main">
      <Link to="/pages/list">Pages List</Link>
      </div>
    );
  }
}

export default Main;
