import './ErrorPage.css';

const ErrorPage = () => {
  const errorImage = require('../../assets/MindFlayerFront.png');

  return (
    <div className="ErrorPage">
      <img src={errorImage} className='error-image' />
      <div className="error-message">
        {/* When we have error messages returned from BE, this copy will be replaced */}
        Uh oh! You seem to have landed in an unknown realm. <br /><br /> Please Plane Shift your way back Home and try again.
      </div>
    </div>
  );
};

export default ErrorPage;