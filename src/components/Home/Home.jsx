import PropTypes from 'prop-types';
import './Home.css';
import EncounterPreviewContainer from '../EncounterPreviewContainer/EncounterPreviewContainer';

export default function Home({encounters, enemies}) {
  return (
    <div className='home'>
      <EncounterPreviewContainer encounters={encounters} enemies={enemies} />
    </div>
  )
}

Home.propTypes = {
};