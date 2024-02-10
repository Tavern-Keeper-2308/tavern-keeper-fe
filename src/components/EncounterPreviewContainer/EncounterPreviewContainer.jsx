import PropTypes from 'prop-types';
import { useState } from 'react';
import { useApolloClient, gql } from '@apollo/client';
import './EncounterPreviewContainer.css';
import EncounterPreviewCard from '../EncounterPreviewCard/EncounterPreviewCard';

const EncounterPreviewContainer = ({ encounters, setSelectedEncounter }) => {
  const client = useApolloClient();

  const getIndividualEncounter = async (id) => {
    if (id) {
      try {
        const { data } = await client.query({
          query: gql`
            query getEncounter($id: ID!) {
              encounter(id: $id) {
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
                  monsterIndex
                }
              }
            }
          `,
          variables: {
            "id": id
          },
        });
        setSelectedEncounter(data.encounter);
      } catch (error) {
        console.error('Error fetching encounter details: ', error);
      }
    }
  };

  const selectEncounter = (encounter) => {
    const id = encounter.id;
    getIndividualEncounter(id);
    // setSelectedEncounter(encounter);
  }

  const encounterPreviews = encounters && encounters.map(encounter => (
    <EncounterPreviewCard
      key={encounter.id}
      id={encounter.id}
      name={encounter.encounterName}
      summary={encounter.summary}
      partySize={encounter.partySize}
      partyLevel={encounter.partyLevel}
      monsters={encounter.encounterMonsters}
      onClick={() => selectEncounter(encounter)}
    />
  ));

  return (
    <div className='EncounterPreviewContainer'>
      {encounterPreviews}
    </div>
  );
};

EncounterPreviewContainer.propTypes = {
};

export default EncounterPreviewContainer;