import React, { Component } from 'react';
import {inject, observer} from 'mobx-react'
import logo from './logo.svg';
import './App.css';

@inject ('PagesStore')
@observer
class App extends Component {

  handleSubmit = (e)=>{
    e.preventDefault();
    const title = this.title.value;
    this.props.PagesStore.addPage({title});
    this.title.value="";
  }

  render() {
      const {PagesStore} = this.props;

      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Mobx</h1>
        </header>
        <div className="App-intro">
         <p>{PagesStore.pagesCount} Pages in store</p>
         <form onSubmit={e=>this.handleSubmit(e)}>
         <input type="text" placeholder="add page title" ref={input => this.title = input}/>
         <button>Add</button>
         </form>
         <ul>
         {PagesStore.pages.map( (page,i) => {
           return (
          <li key={i}>
          {page.title}
          </li>
         )}
        )}
         </ul>
        </div>
      </div>
    );
  }
}

export default App;
