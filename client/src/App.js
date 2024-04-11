import React from "react";
import {Routes, Route} from 'react-router-dom';
import Categories from "./Categories";
import Header from './Header';
import Footer from "./Footer";
import Products from "./Products";


function App() {
  return (
    <>
      <Header />,
      <div className='container'>
        <Categories />
        <Products />
      </div>,
      <Footer />
    </>
  );
}

export default App;
