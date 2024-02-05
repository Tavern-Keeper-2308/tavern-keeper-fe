import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation.jsx'
import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <header>
        <Link to={'/'}><h1>Tavern Keeper</h1></Link>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/:id" element={<EncounterDetails />}/>
        <Route path="/new" element={<EncounterBuilder />}/>
      </Routes>
    </div>
  );
}

App.propTypes = {
};