import React from "react";
import {Routes, Route} from 'react-router-dom';
import Categories from "./Categories";
import Header from './Header';
import Footer from "./Footer";


function App() {
  return (
    <>
      <Header />,
      <div className='container' style={{ minHeight: '80vh' }}>
        <Categories />
      </div>,
      <Footer />
    </>
  );
}

export default App;
