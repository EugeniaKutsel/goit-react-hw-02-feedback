import PropTypes from 'prop-types';
import css from "../FeedbackOptions/FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackOptions}>
      {options.map(option => (
        <button className={css.button} key={option} type="button" onClick={()=> onLeaveFeedback(option)}>{option}</button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape),
}

export default FeedbackOptions;