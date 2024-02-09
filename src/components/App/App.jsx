import './App.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Link } from 'react-router-dom';
import { useApolloClient, gql } from '@apollo/client';
import Home from '../Home/Home.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import EncounterBuilder from '../EncounterBuilder/EncounterBuilder.jsx';
import EncounterDetails from '../EncounterDetails/EncounterDetails.jsx';
import Login from '../Login/Login.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';
import { allEncountersForUser } from '../../mockDataset.js';

export default function App() {
  const [encounters, setEncounters] = useState([]);
  const client = useApolloClient();

  useEffect(() => {
    const getEncounters = async () => {
      try {
        const { data } = await client.query({
          query: gql`
            query getEncounters($userName: String!) {
              encounters(userName: $userName) {
                  id
                  userName
                  encounterName
                  partySize
                  partyLevel
                  summary
                  description
                  treasure
                  encounterMonsters {
                      monsterName
                  }
              }
          }
    `,
          variables: {
            "userName": "demo-many-encounters"
          },
        });
        setEncounters(data.encounters);
      } catch (error) {
        console.error('Error fetching encounters: ', error);
      }
    };
    getEncounters();
  }, [client]);

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
        <Route path="/details/:id" element={<EncounterDetails encounters={encounters} />} />
        <Route path="/encounterbuilder" element={<EncounterBuilder />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

App.propTypes = {
};