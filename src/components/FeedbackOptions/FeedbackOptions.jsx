import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedbackOptions">
      {options.map(option => (
        <button key={option} type="button" onClick={()=> onLeaveFeedback(option)}>{option}</button>
      ))}
    </div>
  );
}

export default FeedbackOptions;