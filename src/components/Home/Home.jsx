import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useApolloClient, gql } from '@apollo/client';
import './Home.css';
import EncounterPreviewContainer from '../EncounterPreviewContainer/EncounterPreviewContainer';

export default function Home({ userId, setSelectedEncounter }) {
  const [encounters, setEncounters] = useState([]);
  const client = useApolloClient();

  useEffect(() => {
    const getEncounters = async (userId) => {
      if (userId) {
        try {
          const { data } = await client.query({
            query: gql`
              query getEncounters($userId: Integer!) {
                encounters(userId: $userId) {
                  id
                  userId
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
              "userId": userId
            },
          });
          setEncounters(data.encounters);
        } catch (error) {
          console.error('Error fetching encounters: ', error);
        }
      }
    };
    getEncounters(userId);
  }, [userId, client]);

  return (
    <div className='Home'>
      <EncounterPreviewContainer encounters={encounters} setSelectedEncounter={setSelectedEncounter} />
    </div>
  );
};

Home.propTypes = {
  userId: PropTypes.string,
  setSelectedEncounter: PropTypes.func.isRequired
};