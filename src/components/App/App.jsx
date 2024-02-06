import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import EncounterBuilder from '../EncounterBuilder/EncounterBuilder.jsx';
import Login from '../Login/Login.jsx';

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
        <Route path="/login" element={<Login />} />
        {/* <Route path="/:id" element={<EncounterDetails />}/> */}
        <Route path="/encounterbuilder" element={<EncounterBuilder />} />
      </Routes>
    </div>
  );
};

App.propTypes = {
};