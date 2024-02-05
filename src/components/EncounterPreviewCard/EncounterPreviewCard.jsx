import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import './EncounterPreviewCard.css';

const EncounterPreviewCard = () => {
  return (
    <div className='EncounterPreviewCard'>
      <h2 className='preview-encounter-name'>Encounter Name</h2>
      <p className='preview-encounter-summary'>Anim pticolt rnirio stroliem vinigopt cuodi prcustu edes? Miumil modiceb, cuames nodite tulidors tuote. Grciupe ictala egumeli metecos firantumum antejus pacit cefuic lilaesus fotesuruo. Tincesut serntrtuor oreti aspmor. Atuones hirm ndico ceiquss fitturu cubama forragali eres dutaund sculavitancu npresss seci.</p>
      <ul className='preview-monster-list'>
        Monster(s):
        <li className='preview-monster-name'>Placeholder Ancient Black Dragon</li>
        <li className='preview-monster-name'>Placeholder Lich</li>
        <li className='preview-monster-name'>Placeholder Ghoul</li>
      </ul>
      <span className='preview-party-size'>Party Size: X</span>
      <span className='preview-party-level'>Party Level: X</span>
    </div>
  )
}

EncounterPreviewCard.propTypes = {
};

export default EncounterPreviewCard;