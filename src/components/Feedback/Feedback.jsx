import React from "react";

class Feedback extends React.Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }
  
  addFeedbackGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      }
    })
  }

  addFeedbackNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      }
    })
  }

  addFeedbackBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      }
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    if (good === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  }

  render() {
    return (
      <div>
        <div className="feedback">
          <h2 className="title">Please leave feedback</h2>
          <button type="button" onClick={this.addFeedbackGood}>Good</button>
          <button type="button" onClick={this.addFeedbackNeutral}>Neutral</button>
          <button type="button" onClick={this.addFeedbackBad}>Bad</button>
        </div>

        <div className="statistics">
          <h2 className="title">Statistics</h2>
          <p className="text">Good: {this.state.good}</p>
          <p className="text">Neutral: {this.state.neutral}</p>
          <p className="text">Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }
}

export default Feedback;