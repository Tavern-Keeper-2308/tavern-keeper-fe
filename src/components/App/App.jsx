import './App.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header.jsx'
import Home from '../Home/Home.jsx'

function App() {



  return (
    <div className="App">
      Content TBD
      <Header />
      <Home />
    </div>
  );
}

export default App;

App.propTypes = {
};