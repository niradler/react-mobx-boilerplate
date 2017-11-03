import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {

  handleSubmit = (e)=>{
    e.preventDefault();
    const title = this.title.value;
    this.props.PagesStore.addPage({title});
    this.title.value="";
  }

  render() {
     return (
      <div className="header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Mobx</h1>
        </header>
      </div>
    );
  }
}

export default Header;
