import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Header from './Header';
import Categories from './Categories';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header></Header>,
    <div className='container' style = {{minHeight: '80vh'}}>
      <Categories/>
    </div>,
    <Footer />

  </>
);


