import PropTypes from 'prop-types';
import './Home.css';
import EncounterPreviewContainer from '../EncounterPreviewContainer/EncounterPreviewContainer';

export default function Home({ encounters }) {
  // console.log(monster);

  return (
    <div className='Home'>
      <EncounterPreviewContainer encounters={encounters} />
    </div>
  );
};

Home.propTypes = {
};