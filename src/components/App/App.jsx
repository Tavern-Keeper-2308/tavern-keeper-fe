import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import EncounterBuilder from '../EncounterBuilder/EncounterBuilder.jsx';
import EncounterDetails from '../EncounterDetails/EncounterDetails.jsx';
import Login from '../Login/Login.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import Signup from '../Signup/Signup.jsx';

export default function App() {
  const [selectedEncounter, setSelectedEncounter] = useState(null);
  const [userId, setUserId] = useState(null);
  const location = useLocation();

  return (
    <div className="App">
      <header>
        {location.pathname !== '/login' ? (
          <>
            <Link className='home-button' onClick={console.log(userId, "userId")} to={'/'}>
              <h1 className='app-title'>Tavern Keeper</h1>
            </Link>
            <Navigation setUserId={setUserId} />
          </>
        ) : (
          <div className='home-button-disabled'>
            <h1 className='app-title'>Tavern Keeper</h1>
          </div>
        )}
      </header>
      <Routes>
        <Route path="/" element={<Home userId={userId} setSelectedEncounter={setSelectedEncounter} />} />
        <Route path="/signup" element={<Signup setUserId={setUserId} />} />
        <Route path="/login" element={<Login setUserId={setUserId} />} />
        <Route path="/details/:id" element={<EncounterDetails selectedEncounter={selectedEncounter} />} />
        <Route path="/encounterbuilder" element={<EncounterBuilder userId={userId} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};