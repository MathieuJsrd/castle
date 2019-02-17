
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.js';

//Creation of javascript class
//app object
class App extends Component {
  //We return it
  render() {
    return (
      //Display Welcome component = welcome.js
      //name est une props, on peut désormais y avoir accès sur welcome.js avec des { }
      <Welcome name="Jackson"/>
    );
  }
}

//to import app in index.js
export default App;
