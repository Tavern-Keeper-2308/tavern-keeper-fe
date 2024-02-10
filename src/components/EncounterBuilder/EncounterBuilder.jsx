import PropTypes from 'prop-types';
import './EncounterBuilder.css';
import React, { useEffect, useState } from 'react';
import {MonsterFilter} from '../MonsterFilter/MonsterFilter'

const EncounterBuilder = ({allMonsters}) => {
  //data will become a query here rather than a prop passed in
  const [monsterList, setMonsterList] = useState(allMonsters);
  const [monsters, setMonsters] = useState(allMonsters); //replace with api call data
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('');
  const [selectedNameFilter, setSelectedNameFilter] = useState('');
  const [selectedArmorClassFilter, setSelectedArmorClassFilter] = useState('');
  const [selectedHitPointsFilter, setSelectedHitPointsFilter] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState([]);

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
  }, [selectedSizeFilter, selectedNameFilter, selectedArmorClassFilter, selectedHitPointsFilter, monsters]);
  
// array data comes in from allMonsters
// useEffect waits for allMonsters to fully load, then maps all the names out for the name dropdown search and sets the monsterList state with that array
// also sets the filteredMonsters to start with all of them
//

  useEffect(() => {
    if (allMonsters && allMonsters) {
      console.log(allMonsters, "allmonsters")
      const monsterNames = allMonsters.map((monster) => {
        return (<option key={monster.name} value={monster.name}>{monster.name}</option>)
      })
      setFilteredMonsters(allMonsters)
      setMonsterList(monsterNames)
      setMonsters(allMonsters)
    }
  }, [allMonsters])


  useEffect(() => {
    const monsterAll = filteredMonsters.map((monster)=> {(
          <div key={monster.name}>
            <h3>{monster.name}</h3>
            <p>{monster.size}</p>
          </div>
        )
      });      
      console.log(filteredMonsters, "filteredMonsters")
  }, [filteredMonsters])

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
            {filteredMonsters && <div>{filteredMonsters.map((monster) => {
              <p>{monster.name}</p>
            })}</div>}
          </div>
        </section>
      </section>
    </div>
  );
};

EncounterBuilder.propTypes = {
};

export default EncounterBuilder;