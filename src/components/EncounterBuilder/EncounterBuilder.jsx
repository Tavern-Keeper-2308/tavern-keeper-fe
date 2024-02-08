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
    <div className='EncounterBuilder'>
      <div>
        <select>
          <option value=""></option>
        </select>
        
      </div>
      <section className='encounter-header'>
        <input type="text" aria-label="encounter name input" placeholder="Encounter Name" required></input>
        <div className='party-stats'>
          <input type="text" aria-label="party size input" placeholder="Party Size" required></input>
          <input type="text" aria-label="party level input" placeholder="Party Level" required></input>
        </div>
      </section>
    </div>
  );
};

EncounterBuilder.propTypes = {
};

export default EncounterBuilder;