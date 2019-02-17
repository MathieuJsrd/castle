//
import React from 'react'; //require nouvelle gen javascript
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//We import the app from app.js
//we insert the app component into the root id
//Root id is in the index html
//JS generates html
ReactDOM.render(<App />, document.getElementById('root'));


