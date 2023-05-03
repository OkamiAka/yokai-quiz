import PropTypes from "prop-types";
import loading from "../assets/loading.gif";

function HistoryOfTheTemple({ setSwitchToQuizz, story, checkLoading }) {
  return (
    <>
      <div className="story">
        <h3>Appearance: </h3>
        <p>{story.appearance}</p>
        <h3>Story: </h3>
        <p>{story.origin}</p>
      </div>
      {checkLoading === true ? (
        <button onClick={() => setSwitchToQuizz(true)} type="button">
          Continue ⇒
        </button>
      ) : (
        <img className="loading" src={loading} alt="loading" />
      )}
    </>
  );
}

HistoryOfTheTemple.propTypes = {
  setSwitchToQuizz: PropTypes.func.isRequired,
  checkLoading: PropTypes.bool.isRequired,
  story: PropTypes.shape({
    appearance: PropTypes.string,
    origin: PropTypes.string,
  }).isRequired,
};
export default HistoryOfTheTemple;
