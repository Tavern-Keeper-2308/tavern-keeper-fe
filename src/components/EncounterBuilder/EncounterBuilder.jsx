import PropTypes from 'prop-types';
import './EncounterBuilder.css';
import React, { useEffect, useState } from 'react';

const EncounterBuilder = ({allMonsters}) => {
  const [monsterList, setMonsterList] = useState(allMonsters);
  const [searchAC, setSearchAC] = useState(0);
  const [searchHP, setSearchHP] = useState(0);
  const [searchSize, setSearchSize] = useState('');
  const [searchName, setSearchName] = useState('');
  const [monstersShow, setMonstersShow] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(allMonsters);
  const [selectedFilter, setSelectedFilter] = useState('none');

  const handleRadioChange = (e) => {
    const choice = e.target.value;
    setSelectedFilter(choice);
    // console.log(selectedFilter, "filter current")
  }

  const handleInputChangeHP = (e) => { 
    const searchTerm = e.target.value;

    setSearchHP(searchTerm)
    console.log(searchHP, "search HP")
  };

  const handleInputChangeAC = (e) => { 
    const searchTerm = e.target.value;
    setSearchAC(searchTerm)
    console.log(searchAC, "search AC")
  };

  const handleInputChangeName = (event) => { 
    const searchTerm = event.target.value;
    setSearchName(searchTerm)
    console.log(searchName, "search name")
  };

  const handleInputChangeSize = (event) => { 
    const searchTerm = event.target.value; 
    setSearchSize(searchTerm)
    console.log(searchSize, "search size")
  };

  function applyFilter(selectedFilter) {
    if(selectedFilter === "none"){
      setFilteredMonsters(allMonsters);
    } else if(selectedFilter === "name") {
      const filter = allMonsters.filter((monster)=> {
        return monster.name.toLowerCase() == searchName.toLowerCase()
      })
      console.log(filter, "filter applied")
      setFilteredMonsters(filter)
    } else if(selectedFilter === "size") {
      const filter = allMonsters.filter((monster)=> {
        return monster.size.toLowerCase() == searchSize.toLowerCase()
      })
      console.log(filter, "filter applied")
      setFilteredMonsters(filter)
    } else if(selectedFilter === "ac"){
      const filter = allMonsters.filter((monster)=> {
        return monster.armor_class == searchAC
      })
      console.log(filter, "filter applied")
      setFilteredMonsters(filter)
    } else if(selectedFilter === "hp") {
      console.log(searchHP, "insife")
      const filter = allMonsters.filter((monster)=> {
        return monster.hit_points == searchHP
      })
      console.log(filter, "filter applied")
      setFilteredMonsters(filter)
    }
  }

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
      setMonsterList(monsterNames)
      setFilteredMonsters(allMonsters)
    }
  }, [allMonsters])


  useEffect(() => {
    console.log(filteredMonsters, "filtered monster")
    const showList = filteredMonsters.map(monster => {
      return (
        <div className='monster-checker'>
        <p>{monster.name}</p>
        <input type="checkbox" id={monster.name} key={monster.name} name="name" value={monster.name}></input>
      </div>
      )
    })
    setMonstersShow(showList)
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
            <button onClick={() => {applyFilter(selectedFilter)}}>Search</button>
          </div>
          <div className='monster-selection'>
           {monstersShow}
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