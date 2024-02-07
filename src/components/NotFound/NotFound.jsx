import './NotFound.css';

const NotFound = () => {
  const errorImage = require('../../assets/MindFlayerFront.png');

  return (
    <div className="NotFound">
      <img src={errorImage} className='error-image' />
      <div className="error-message">
        Uh oh! You seem to have landed in an unknown realm. <br /><br /> Please Plane Shift your way back Home and try again.
      </div>
    </div>
  );
};

export default NotFound;