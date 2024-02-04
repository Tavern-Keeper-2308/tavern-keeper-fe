import './App.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header.jsx'
import Home from '../Home/Home.jsx'
import Creator from '../Creator/Creator.jsx'
import Details from '../Details/Details.jsx'

function App() {


  return (
    <div className="App">
      Content TBD
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/encounter/:id" element={<Details />}/>
        <Route path="/encounter/new" element={<Creator />}/>
      </Routes>
    </div>
  );
}

export default App;

App.propTypes = {
};