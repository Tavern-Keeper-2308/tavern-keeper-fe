import './App.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { monsters, singleMonster, userData, encounterData } from '../../mockData.js'
import Home from '../Home/Home.jsx'
import EncounterDetails from '../EncounterDetails/EncounterDetails.jsx';
// import Navigation from '../Navigation/Navigation.jsx'
import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  const [encounters, setEncounters] = useState(encounterData.data.queryEncounters);
  const [error, setError] = useState('');
  const [enemies, setEnemies] = useState(monsters.data.queryMonsters);

  return (
    <div className="App">
      <header>
        <Link to={'/'}><h1>Tavern Keeper</h1></Link>
        {/* <Navigation /> */}
      </header>
      <Routes>
        <Route path="/" element={<Home encounters={encounters} enemies={enemies}/>}/>
        {/* <Route path="/login" element={<Login />}/>
        <Route path="/builder" element={<EncounterBuilder />}/> */}
        <Route path="/:id" element={<EncounterDetails />}/>
      </Routes>
    </div>
  );
}

App.propTypes = {
};