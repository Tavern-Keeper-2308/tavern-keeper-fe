import PropTypes from 'prop-types';
import './Home.css';
import EncounterPreviewContainer from '../EncounterPreviewContainer/EncounterPreviewContainer';

export default function Home() {
  return (
    <div className='Home'>
      <EncounterPreviewContainer />
    </div>
  );
};

Home.propTypes = {
};