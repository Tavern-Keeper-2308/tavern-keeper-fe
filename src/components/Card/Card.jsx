import PropTypes from 'prop-types';
import './Card.css';

export default function Card() {
  return (
    <div className='card'>
      <h2 className='card-title'>Encounter Name</h2>
      <h3 className='heading-name'>Party Size</h3>
      <h3 className='heading-name'>Party Level</h3>
      <h3 className='heading-name'>Summary</h3>
      <h3 className='heading-name'>Description</h3>
      <h3 className='heading-name'>Treasure</h3>
      <div className='monster-section'>
        <h3 className='heading-name'>Monsters</h3>
        <p className='data-name'>Monster data to plug in</p>
      </div>
    </div>
  )
}