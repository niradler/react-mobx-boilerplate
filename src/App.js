import React, { Component } from 'react';
import {inject, observer} from 'mobx-react'
import { BrowserRouter,Route } from 'react-router-dom'
import Header from './Header.js';
import Main from './Main.js';
import PagesList from './PagesList.js';
import './App.css';

@inject ('PagesStore')
@observer
class App extends Component {


  render() {
      return (
  <div className="App">
      <Header />
        <div className="App-intro">
        <BrowserRouter>
        <div>
        <Route path="/" exact component={Main} />
        <Route path="/pages/list" component={PagesList} />
        </div>
        </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
