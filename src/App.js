import React, { Component } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
