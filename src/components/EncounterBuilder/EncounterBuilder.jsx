import PropTypes from 'prop-types';
import './EncounterBuilder.css';
import React, { useEffect, useState } from 'react';
import { useApolloClient, gql } from '@apollo/client';
import {MonsterFilter} from '../MonsterFilter/MonsterFilter'
import { renderHook } from '@testing-library/react';

const EncounterBuilder = () => {
  const [monsterList, setMonsterList] = useState([]);
  const [monsters, setMonsters] = useState([]);
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('');
  const [selectedNameFilter, setSelectedNameFilter] = useState('');
  const [selectedArmorClassFilter, setSelectedArmorClassFilter] = useState('');
  const [selectedHitPointsFilter, setSelectedHitPointsFilter] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [toShow, setToShow] = useState([]);

  const client = useApolloClient();

  const getMonsters = async () => {
    try {
      const {data} = await 
        client.query({
          query: gql`
            query getMonsters {
            monsters {
              monsterIndex
              monsterName
              size
              hitPoints
              armorClass
              type
            }
          }
          `, 
        });
      setMonsters(data.monsters);
      setFilteredMonsters(data.monsters);
    } catch(error) {
      console.error("Error fetching monsters: ", error);
    }
  }

  useEffect(() => {
    getMonsters(); //makes call to get monsters data
    if (filteredMonsters) {
      const monsterNames = filteredMonsters.map((monster) => {
        return (
        <option key={monster.monsterIndex} value={monster.monsterName}>{monster.monsterName}</option>
        )
      })
      const renderMonsters = filteredMonsters.map((monster)=> {(
        <div key={monster.monsterIndex}>
          <h3>{monster.monsterName}</h3>
          <button>+</button>
        </div>
        )
      }); 
      // setMonsters()
      setMonsterList(monsterNames) //name filter list
      setToShow(renderMonsters)
    }
  }, []) //on mount

  useEffect(() => {
    setToShow(filteredMonsters.map((monster)=> {(
      <div key={monster.monsterIndex}>
        <h3>{monster.monsterName}</h3>
        <button>+</button>
      </div>
      )}))
  }, [filteredMonsters]);

  useEffect(() => {
      if (selectedSizeFilter || selectedNameFilter || selectedArmorClassFilter || selectedHitPointsFilter) {
        const filtered = monsters.filter((monster) => {
          // const sizeCondition = !selectedSizeFilter || monster.size.toLowerCase() === selectedSizeFilter.toLowerCase();
          // const nameCondition = !selectedNameFilter || monster.name.toLowerCase() === selectedNameFilter.toLowerCase();
          // const armorClassCondition = !selectedArmorClassFilter || monster.armorClass === selectedArmorClassFilter;
          const hitPointsCondition = !selectedHitPointsFilter || monster.hitPoints === selectedHitPointsFilter;
          return hitPointsCondition;
          //  sizeCondition && nameCondition && armorClassCondition && 
          
        });
        setFilteredMonsters(filtered);
      } else {
        setFilteredMonsters(monsters);
      }
    }, [selectedSizeFilter, selectedNameFilter, selectedArmorClassFilter, selectedHitPointsFilter, filteredMonsters]);

  

  const handleSizeFilterChange = (sizeFilter) => {
    // console.log(sizeFilter, "size")
    setSelectedSizeFilter(sizeFilter);
  }

  const handleNameFilterChange = (nameFilter) => {
    // console.log(nameFilter, "name")
    setSelectedNameFilter(nameFilter);
  }

  const handleArmorClassFilterChange = (armorClassFilter) => {
    // console.log(armorClassFilter, "ac")
    setSelectedArmorClassFilter(parseInt(armorClassFilter));
  }

  const handleHitPointsFilterChange = (hitPointsFilter) => {
    console.log("hp:", hitPointsFilter)
    setSelectedHitPointsFilter(hitPointsFilter);
  }

 

  return (
    <div className='EncounterBuilder encounter-builder'>
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
          <h2>Search By:</h2>
          <div className='monster-selection'>
          <MonsterFilter
            onSizeFilterChange={handleSizeFilterChange}
            onNameFilterChange={handleNameFilterChange}
            onArmorClassFilterChange={handleArmorClassFilterChange}
            onHitPointsFilterChange={handleHitPointsFilterChange}
            monsterList={monsterList}
          />
            {filteredMonsters.length === 0 && <span className='no-results'>No creatures match your search.</span>}
            {toShow}
          </div>
        </section>
      </section>
    </div>
  );
};

EncounterBuilder.propTypes = {
};

export default EncounterBuilder;