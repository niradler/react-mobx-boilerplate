import React, { Component } from 'react';
import {inject, observer} from 'mobx-react'
@inject ('PagesStore')
@observer
class PagesList extends Component {

  handleSubmit = (e)=>{
    e.preventDefault();
    const title = this.title.value;
    this.props.PagesStore.addPage({title});
    this.title.value="";
  }
  
  render() {
    const {PagesStore} = this.props;
     return (
      <div className="pagesList">
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

export default PagesList;
