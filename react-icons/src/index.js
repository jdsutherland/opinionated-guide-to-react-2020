import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IconContext } from "react-icons";

ReactDOM.render(
  <IconContext.Provider value={{ size: 100 }}>
    <App />
  </IconContext.Provider>,
  document.getElementById('root')
);
