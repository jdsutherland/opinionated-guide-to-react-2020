import React from 'react';
import ReactDOM from 'react-dom';
import airports from "./data";
import './index.css';
import App from './App';
import AirportContext from "./AirportContext";

ReactDOM.render(
  <AirportContext.Provider value={airports}>
    <App />
  </AirportContext.Provider>,
  document.getElementById('root')
);
