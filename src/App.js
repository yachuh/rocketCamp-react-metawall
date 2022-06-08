import './App.css';
import React, { Component } from "react";
import Header from './Header';
import PostList from './PostList';

class App extends Component {
  render(){
    return (
      <div className="wrap">
        <Header />
        <PostList />
      </div>
    );
  }
}

export default App;
