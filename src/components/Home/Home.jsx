import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useApolloClient, gql } from '@apollo/client';
import './Home.css';
import EncounterPreviewContainer from '../EncounterPreviewContainer/EncounterPreviewContainer';

export default function Home({ userName, setSelectedEncounter, encounterCreated }) {
  const [encounters, setEncounters] = useState([]);
  const client = useApolloClient();

  useEffect(() => {
    console.log("fetch encounters list")
    const getEncounters = async (userName) => {
      console.log("inside async request")
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
          console.log(data.encounters, "data.encounters")
          console.log(encounters, "encounters state inside useEffect")
        } catch (error) {
          console.error('Error fetching encounters: ', error);
        }
      }
    };
    getEncounters(userName);
  }, [userName, client, encounterCreated]);

  console.log(encounters, "encounters state oustdie useEffect")

  return (
    <div className='Home'>
      <EncounterPreviewContainer encounters={encounters} setSelectedEncounter={setSelectedEncounter} encounterCreated={encounterCreated} />
    </div>
  );
};

Home.propTypes = {
};