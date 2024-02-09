import PropTypes from 'prop-types';
import './EncounterBuilder.css';
import React, { useEffect, useState } from 'react';

const EncounterBuilder = ({allMonsters}) => {
  const [monsterList, setMonsterList] = useState(allMonsters);
  const [searchAC, setSearchAC] = useState(0);
  const [searchHP, setSearchHP] = useState(0);
  const [searchSize, setSearchSize] = useState('');
  const [searchName, setSearchName] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(allMonsters);
  const [selectedFilter, setSelectedFilter] = useState('none');

  const handleRadioChange = (e) => {
    const choice = e.target.value;
    setSelectedFilter(choice);
    // console.log(selectedFilter, "filter current")
  }

  const handleInputChangeHP = (e) => { 
    const searchTerm = e.target.value;
    console.log(searchTerm, "HP")
    setSearchHP(searchTerm)
  };

  const handleInputChangeAC = (e) => { 
    const searchTerm = e.target.value;
    console.log(searchTerm, "AC")
    setSearchAC(searchTerm)
  };

  const handleInputChangeName = (event) => { 
    const searchTerm = event.target.value;
    console.log(searchTerm, "search name")
    setSearchName(searchTerm)
  };

  const handleInputChangeSize = (event) => { 
    const searchTerm = event.target.value; 
    console.log(searchSize, "search size")
    setSearchSize(searchTerm)
  };

  function doFilter(selectedFilter) {
    if(selectedFilter === "none"){
      setFilteredMonsters(allMonsters);
    } 
  }

  useEffect(() => {
    if (allMonsters && allMonsters) {
      const monsterNames = allMonsters.map((monster) => {
        return (<option key={monster.name} value={monster.name}>{monster.name}</option>)
      })
      setMonsterList(monsterNames)
    }
  }, [allMonsters])


  useEffect(() => {
    console.log(filteredMonsters)
  }, [filteredMonsters])

  useEffect(() => {
    console.log(selectedFilter, "selectedFilter")
  }, [selectedFilter])

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
          <h2>Search By:</h2>
          <div className='monster-selection'>
            <input type='radio' name='filter-select' value='size' onChange={handleRadioChange}></input>
            <label htmlFor="size">Size:</label>
            <select onChange={handleInputChangeSize} id='size'>
              <option value=''></option>
              <option value="Tiny">Tiny</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="Huge">Huge</option>
              <option value="Gargantuan">Gargantuan</option>
            </select>
            <input type='radio' name='filter-select' value='name' onChange={handleRadioChange}></input>
            <label htmlFor="name">Name:</label>
            <select onChange={handleInputChangeName} id='name'>
              <option value=""></option>
              {monsterList}
            </select>
            <input type='radio' name='filter-select' value='hp' onChange={handleRadioChange}></input>
            <input type="number" aria-label="hit points search" placeholder="Hit Points" onChange={handleInputChangeHP}></input>
            <input type='radio' name='filter-select' value='ac' onChange={handleRadioChange}></input>
            <input type="number"aria-label="armor class search" placeholder="Armor Class" onChange={handleInputChangeAC}></input>
            <button onClick={() => {}}>Search</button>
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
      <button>Create Encounter</button>
    </div>
  );
};

EncounterBuilder.propTypes = {
};

export default EncounterBuilder;