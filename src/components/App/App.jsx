import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import Home from '../Home/Home.jsx'
import Navigation from '../Navigation/Navigation.jsx'
import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <header>
        <Link className='home-button' to={'/'}>
          <h1 className='app-title'>Tavern Keeper</h1>
        </Link>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />}/>
        <Route path="/:id" element={<EncounterDetails />}/>
        <Route path="/builder" element={<EncounterBuilder />}/> */}
      </Routes>
    </div>
  );
}

App.propTypes = {
};