import './App.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import EncounterBuilder from '../EncounterBuilder/EncounterBuilder.jsx';
import EncounterDetails from '../EncounterDetails/EncounterDetails.jsx';
import Login from '../Login/Login.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';

export default function App() {
  const [selectedEncounter, setSelectedEncounter] = useState(null);
  const [userName, setUserName] = useState(null);
  const location = useLocation();

  return (
    <div className="App">
      <header>
        {location.pathname !== '/login' ? (
          <>
            <Link className='home-button' onClick={console.log(userName, "userName")} to={'/'}>
              <h1 className='app-title'>Tavern Keeper</h1>
            </Link>
            <Navigation setUserName={setUserName} />
          </>
        ) : (
          <div className='home-button-disabled'>
            <h1 className='app-title'>Tavern Keeper</h1>
          </div>
        )}
      </header>
      <Routes>
        <Route path="/" element={<Home userName={userName} setSelectedEncounter={setSelectedEncounter} />} />
        <Route path="/login" element={<Login setUserName={setUserName} />} />
        <Route path="/details/:id" element={<EncounterDetails selectedEncounter={selectedEncounter} />} />
        <Route path="/encounterbuilder" element={<EncounterBuilder userName={userName} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};