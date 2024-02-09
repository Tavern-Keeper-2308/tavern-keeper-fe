import PropTypes from 'prop-types';
import './EncounterBuilder.css';
import React, { useEffect, useState } from 'react';
import { monsters } from '../../mockDataset';

const EncounterBuilder = () => {
  const [monsterList, setMonsterList] = useState(monsters.queryMonsters);
  const [searchAC, setSearchAC] = useState('');
  const [searchHP, setSearchHP] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters.queryMonsters);

    const handleInputChangeHP = (e) => { 
      const searchTerm = e.target.value;
      setSearchHP(searchTerm)
      const filterMonsters = monsterList.filter((monster) => {
        return monster.armorClass === searchTerm
      });
      setFilteredMonsters(filterMonsters);
    }

    const handleInputChangeAC = (e) => { 
      const searchTerm = e.target.value;
      setSearchAC(searchTerm)
      const filterMonsters = monsterList.filter((monster) => {
        return monster.armorClass === searchTerm
      });
      setFilteredMonsters(filterMonsters);
    }
 

  useEffect(() => {
    // placeholder for fetch call/query to get all monsters
    // setMonsterList(filterMonsters)

  }, [])

  return (
    <div className='encounter-builder'>
      <section className='main-details'>
        <section className='base-box'>
          <section className='encounter-header'>
            <h3>Encounter Name:</h3>
            <input type="text" aria-label="encounter name input" required></input>
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
            <label htmlFor="size">Size:</label>
            <select id='size'>
              <option value="size">{}</option>
            </select>
            <label htmlFor="name">Name:</label>
            <select id='name'>
              <option value="name">{}</option>
            </select>
            <input type="number" value={searchHP} onChange={handleInputChangeHP} aria-label="hit points search" placeholder="Hit Points"></input>
            <input type="number" value={searchAC} onChange={handleInputChangeAC} aria-label="armor class search" placeholder="Armor Class"></input>
          </div>
          <div className='monster-selection'>
            <div>{filteredMonsters.map(monster => {
              return (
                <div className='monster-checker' key={monster.name}>
                <p>{monster.name}</p>
                <input type="checkbox" id={monster.name} name="name" value={monster.name}></input>
              </div>
              )
            })}</div>
          </div>
        </section>
      </section>
      <button>Submit</button>
    </div>
  );
};

EncounterBuilder.propTypes = {
};

export default EncounterBuilder;