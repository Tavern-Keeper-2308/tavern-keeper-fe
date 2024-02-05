import PropTypes from 'prop-types';
import './EncounterDetails.css';

export default function EncounterDetails({ name, party_size, party_level, summary, description, treasure, encounter_monsters }) {
  

  return (
    <section className='details'>
      <section className=''>
        <h2 className='encounter-name'>{name}</h2>
        <div className=''>
          <p>Party Size: {party_size}</p>
          <p>Party Level: {party_level}</p>
        </div>
      </section>
      <section className=''></section>
    </section>

    // <section className="right-container">
    //   
    //   <h3 className="release-date">released {release_date}</h3>
    //   <h3 className="average-rating">average rating {average_rating?.toFixed(2)}/10</h3>
    //   <p className="tagline">{tagline}</p>
    //   <p className='runtime'>{runtime} minutes</p>
    //   <p className="overview">{overview}</p>
    //   {teaserVideoKey && (
    //     <iframe width="560" height="315" src={videoUrl} allowFullScreen title="Teaser Video"></iframe>
    //   )}
    // </section>
  )
}

EncounterDetails.propTypes = {
};