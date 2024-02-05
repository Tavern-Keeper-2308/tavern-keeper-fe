import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import './EncounterPreviewCard.css';

const EncounterPreviewCard = () => {
  return (
    <div className='EncounterPreviewCard'>
      <h2 className='preview-encounter-name'>This Is The Name of the Encounter</h2>
      <h3 className='preview-section-title'>Encounter Summary</h3>
      <p className='preview-encounter-summary'>This is a placeholder summary using some fake text. Anim pticolt rnirio stroliem vinigopt cuodi prcustu edes? Miumil modiceb, cuames nodite tulidors tuote. Grciupe ictala egumeli metecos firantumum antejus pacit cefuic lilaesus fotesuruo. Tincesut serntrtuor oreti aspmor. Atuones hirm ndico ceiquss fitturu cubama forragali eres dutaund sculavitancu npresss seci.</p>
      <h3 className='preview-section-title'>Monster(s)</h3>
      <ul className='preview-monster-list'>
        <li className='preview-monster-name'>Placeholder Ancient Black Dragon</li>
        <li className='preview-monster-name'>Placeholder Lich</li>
        <li className='preview-monster-name'>Placeholder Ghoul</li>
      </ul>
      <div className='preview-small-stat'>
        <div className='preview-party-size'>
          <h3 className='preview-section-title'>Party Size</h3>
          <p className='preview-party-size-value'>X</p>
        </div>
        <div className='preview-party-level'>
          <h3 className='preview-section-title'>Party Level</h3>
          <p className='preview-party-level-value'>X</p>
        </div>
      </div>
    </div>
  )
}

EncounterPreviewCard.propTypes = {
};

export default EncounterPreviewCard;