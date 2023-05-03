import PropTypes from "prop-types";
import loading from "../assets/loading.gif";

function HistoryOfTheTemple({ setSwitchToQuizz, story, checkLoading }) {
  return (
    <>
      <div className="conteneur">
        <div className="conteneur-flex">
          <div>
            <h3>Appearance: </h3>
            <p>{story.appearance}</p>
          </div>
          <div>
            <h3>Story: </h3>
            <p>{story.origin}</p>
          </div>
        </div>
      </div>
      <div className="button">
        <button onClick={() => setSwitchToQuizz(true)} type="button">
          skip⇒
        </button>
      </div>
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
