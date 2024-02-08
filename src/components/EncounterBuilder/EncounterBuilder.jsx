import PropTypes from 'prop-types';
import './EncounterBuilder.css';
import React, { useEffect, useState } from 'react';
import { monsters } from '../../mockDataset';

const EncounterBuilder = () => {
  const [monsterList, setMonsterList] = useState([]);

  useEffect(() => {
    //placeholder for fetch call/query to get all monsters


  })

  return (
    <div className='main-details'>

      <section className='base-box'>
        <section className='encounter-header'>
          <h3>Encounter Name:</h3>
          <input type="text" aria-label="encounter name input" placeholder="" required></input>
          <div className='party-stats'>
            <h3>Party Size:</h3>
            <input type="text" aria-label="party size input" placeholder="" required></input>
            <h3>Party Level:</h3>
            <input type="text" aria-label="party level input" placeholder="" required></input>
          </div>
        </section>
        <section className='encounter-desc'>
          <h3>Short Summary:</h3>
          <input type="text" aria-label="summary input" placeholder="" required></input>
          <h3>Encounter Description:</h3>
          <input type="text" aria-label="description input" placeholder="" required></input>
          <h3>Treasure and Rewards:</h3>
          <input type="text" aria-label="loot input" placeholder="" required></input>
        </section>
      </section>
      <section className='encounter-foes base-box'>
        <div className='monster-selection'>
          <select>
            <option value="size">{}</option>
          </select>
          <select>
            <option value="name">{}</option>
          </select>
          <input type="text" aria-label="hit points search" placeholder="Hit Points"></input>
          <input type="text" aria-label="armor class search" placeholder="Armor Class"></input>
        </div>
        <div className='monster-selection'>
          {}
        </div>
      </section>
    </div>
  );
};

EncounterBuilder.propTypes = {
};

export default EncounterBuilder;