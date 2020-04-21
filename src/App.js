import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExchangedCurrency from './Components/CurrencyConverter'

class App extends Component {
  render() {
    return (
      <div>
        <h2>higher order component</h2>
        <ExchangedCurrency/>
      </div>
    );
  }
}

export default App;
