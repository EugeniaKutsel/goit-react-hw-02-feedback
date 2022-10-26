import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="statistics">
    <p className="text">Good: {good}</p>
    <p className="text">Neutral: {neutral}</p>
    <p className="text">Bad: {bad}</p>
    <p className="text">Total: {total}</p>
    <p className="text">Positive feedback: {positivePercentage}%</p>
  </div>
);

export default Statistics;