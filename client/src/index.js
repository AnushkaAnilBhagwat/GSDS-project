import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CreateCategory from './CreateCategory.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/create-category' element={<CreateCategory />} />
      </Routes>
    </BrowserRouter>
  </>
);

// display existing categories with photo
