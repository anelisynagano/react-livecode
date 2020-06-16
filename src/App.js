import React, { Component } from 'react';
import CardsList from './components/CardsList';
import './App.css';
import data from './data';

class App extends Component {
  
  render(){
    return (
      <CardsList {...data} />
    );
  }
}

export default App;