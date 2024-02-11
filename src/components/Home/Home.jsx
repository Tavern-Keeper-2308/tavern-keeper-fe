import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useApolloClient, gql } from '@apollo/client';
import './Home.css';
import EncounterPreviewContainer from '../EncounterPreviewContainer/EncounterPreviewContainer';

export default function Home({ userName, setSelectedEncounter }) {
  const [encounters, setEncounters] = useState([]);
  const client = useApolloClient();

  useEffect(() => {
    const getEncounters = async (userName) => {
      if (userName) {
        try {
          const { data } = await client.query({
            query: gql`
              query getEncounters($userName: String!) {
                encounters(userName: $userName) {
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
                  }
                }
              }
            `,
            variables: {
              "userName": userName
            },
          });
          setEncounters(data.encounters);
        } catch (error) {
          console.error('Error fetching encounters: ', error);
        }
      }
    };
    getEncounters(userName);
  }, [userName, client]);

  return (
    <div className='Home'>
      <EncounterPreviewContainer encounters={encounters} setSelectedEncounter={setSelectedEncounter} />
    </div>
  );
};

Home.propTypes = {
  userName: PropTypes.string,
  setSelectedEncounter: PropTypes.func.isRequired
};