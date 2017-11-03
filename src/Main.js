import React, { Component } from 'react';
import {  Link } from 'react-router-dom'
class Main extends Component {

  render() {
     return (
      <div className="Main">
      <section>
      <h2>To craete a page please press the link below</h2> 
      <Link to="/pages/list">Pages List</Link>
      </section>
     
      </div>
    );
  }
}

export default Main;
