import PropTypes from 'prop-types';
import './EncounterBuilder.css';
import React, { useEffect, useState } from 'react';
import { useApolloClient, useMutation, gql } from '@apollo/client';
import {MonsterFilter} from '../MonsterFilter/MonsterFilter'

const ENCOUNTER_BUILDER_MUTATION = gql`
  mutation CreateEncounter(
    $userName: String!, $encounterName: String!, $partySize: Int!, $partyLevel: Int!, $summary: String!, $description: String!, $treasure: String!, $encounterIndexes: [String!]!
    ) {
    createEncounter(input: {
      userName: $userName,
      encounterName: $encounterName,
      partySize: $partySize,
      partyLevel: $partyLevel,
      summary: $summary,
      description: $description,
      treasure: $treasure,
      encounterIndexes: $encounterIndexes
    }) {
      encounter {
        userName
        id
        encounterName
        partySize
        partyLevel
        summary
        description
        treasure
        encounterMonsters {
          monsterIndex
          monsterName
          }
        }
    errors
  }
}
`;

const EncounterBuilder = ({userName}) => {
  const [monsterList, setMonsterList] = useState([]);
  const [monsters, setMonsters] = useState([]);
  const [selectedSizeFilter, setSelectedSizeFilter] = useState('');
  const [selectedNameFilter, setSelectedNameFilter] = useState('');
  const [selectedArmorClassFilter, setSelectedArmorClassFilter] = useState('');
  const [selectedHitPointsFilter, setSelectedHitPointsFilter] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [toShow, setToShow] = useState([]);
  const [newEncounter, setNewEncounter] = useState({
    userName: 'userName',
    encounterName: '',
    partySize: 0,
    partyLevel: 0,
    summary: '',
    description: '',
    treasure: '',
    encounterIndexes: [],
  })

  const [encounterBuilder] = useMutation(ENCOUNTER_BUILDER_MUTATION, {
    variables: {
      userName: newEncounter.userName,
      encounterName: newEncounter.encounterName,
      partySize: newEncounter.partySize,
      partyLevel: newEncounter.partyLevel,
      summary: newEncounter.summary,
      description: newEncounter.description,
      treasure: newEncounter.treasure,
      encounterIndexes: newEncounter.encounterIndexes,
    }
  });
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

  useEffect(()=>{
    getMonsters(); //makes call to get monsters data
  }, []); //on mount

  useEffect(()=>{
    if(monsters){
      const monsterNames = monsters.map((monster) => {
        return (
        <option key={monster.monsterIndex} value={monster.monsterName}>{monster.monsterName}</option>
        )
      })
      setMonsterList(monsterNames) //name filter list
      }
  }, [monsters])

  useEffect(() => {
    if (monsters) {
      const renderMonsters = monsters.map((monster)=> {
        return (
        <div key={monster.monsterIndex}>
          <h3>{monster.monsterName}</h3>
          <button onClick={()=>{(e) => {setNewEncounter({
            ...newEncounter,
            encounterIndexes: [...encounterIndexes, monster.monsterIndex]
          })}}}>+</button>
        </div>
        )
      }); 
      setToShow(renderMonsters);
      console.log("renderMonsters: ", renderMonsters)
      // setToShow(filteredMonsters.map((monster)=> {(
      //   <div className='add-new' key={monster.monsterIndex}>
      //     <h3>{monster.monsterName}</h3>
      //     <button>+</button>
      //   </div>
      // )}))
      console.log(filteredMonsters, "filteredMonsters")
    }
  }, [filteredMonsters])

  useEffect(() => {
      if (selectedSizeFilter || selectedNameFilter || selectedArmorClassFilter || selectedHitPointsFilter) {
        const filtered = monsters.filter((monster) => {
          // const sizeCondition = !selectedSizeFilter || monster.size === selectedSizeFilter;
          const nameCondition = !selectedNameFilter || monster.monsterName === selectedNameFilter;
          console.log(nameCondition, "nameCondition")
          // const armorClassCondition = !selectedArmorClassFilter || monster.armorClass === selectedArmorClassFilter;
          // const hitPointsCondition = !selectedHitPointsFilter || monster.hitPoints === selectedHitPointsFilter;
          return nameCondition;
          //  sizeCondition && hitPointsCondition && armorClassCondition && 
          
        });
        console.log(filtered, "filtered")
        setFilteredMonsters(filtered);
      } else {
        setFilteredMonsters(monsters);
      }
    }, [selectedSizeFilter, selectedNameFilter, selectedArmorClassFilter, selectedHitPointsFilter, monsters]);

  const handleSizeFilterChange = (sizeFilter) => {
    // console.log(sizeFilter, "size")
    setSelectedSizeFilter(sizeFilter);
  }

  const handleNameFilterChange = (nameFilter) => {
    console.log(nameFilter, "nameFilter")
    setSelectedNameFilter(nameFilter);
  }

  const handleArmorClassFilterChange = (armorClassFilter) => {
    // console.log(armorClassFilter, "ac")
    setSelectedArmorClassFilter(parseInt(armorClassFilter));
  }

  const handleHitPointsFilterChange = (hitPointsFilter) => {
    // console.log("hp:", hitPointsFilter)
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
              <input type="number" aria-label="party size input" placeholder="" required></input>
              <h3>Party Level:</h3>
              <input type="number" aria-label="party level input" placeholder="" required></input>
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
          <button onClick={()=>{encounterBuilder();}}>Submit New</button>
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
            {toShow}
            {filteredMonsters.length === 0 && <span className='no-results'>No creatures match your search.</span>}
           
          </div>
        </section>
      </section>
    </div>
  );
};

EncounterBuilder.propTypes = {
};

export default EncounterBuilder;