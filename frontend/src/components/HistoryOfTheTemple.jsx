import PropTypes from "prop-types";

function HistoryOfTheTemple({ setSwitchToQuizz }) {
  return (
    <button onClick={() => setSwitchToQuizz(true)} type="button">
      skip⇒
    </button>
  );
}

HistoryOfTheTemple.propTypes = {
  setSwitchToQuizz: PropTypes.func.isRequired,
};
export default HistoryOfTheTemple;