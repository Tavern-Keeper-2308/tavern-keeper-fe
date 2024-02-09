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
  const [monster, setMonster] = useState(null);

  const client = useApolloClient();

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

  const getMonster = async () => {
    try {
      const { data } = await client.query({
        query: gql`
          query getMonster($index: String!) {
            monster(index: $index) {
                monsterIndex
                monsterName
                size
                type
                armorClass
                speed {
                    walk
                    fly
                    swim
                }
                hitPoints
                strength
                dexterity
                constitution
                intelligence
                wisdom
                charisma
                damageVulnerabilities
                damageResistances
                damageImmunities
                conditionImmunities
                proficiencyBonus
                proficiencies {
                    name
                    value
                }
                senses {
                    blindsight
                    darkvision
                    passivePerception
                }
                specialAbilities {
                    name
                    desc
                }
                actions {
                    name
                    desc
                }
                legendaryActions {
                    name
                    desc
                }
            }
        }
        `,
        variables: {
          "index": "aboleth"
        },
      });
      setMonster(data.monster);
    } catch (error) {
      console.error('Error fetching monster: ', error);
    }
  };

  useEffect(() => {
    getEncounters();
    // getMonster();
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