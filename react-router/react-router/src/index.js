import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import User from './User';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Home path="/" />
      <User path="user/:id" />
      <Route path="*" element={<p>Sorry, nothing here</p>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
