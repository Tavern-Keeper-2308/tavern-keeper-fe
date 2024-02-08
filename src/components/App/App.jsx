import './App.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import EncounterBuilder from '../EncounterBuilder/EncounterBuilder.jsx';
import EncounterDetails from '../EncounterDetails/EncounterDetails.jsx';
import Login from '../Login/Login.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import { allEncountersForUser } from '../../mockDataset.js';

export default function App() {
  const [encounters, setEncounters] = useState([]);

  useEffect(() => {
    setEncounters(allEncountersForUser.data.queryUsers[0].encounters);
  }, []);

  return (
    <div className="App">
      <header>
        <Link className='home-button' to={'/'}>
          <h1 className='app-title'>Tavern Keeper</h1>
        </Link>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Home encounters={encounters} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<EncounterDetails encounters={encounters}/>}/>
        <Route path="/encounterbuilder" element={<EncounterBuilder />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

App.propTypes = {
};