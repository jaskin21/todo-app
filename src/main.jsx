import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);
