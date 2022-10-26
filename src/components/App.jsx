import React from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }))
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
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const { onLeaveFeedback } = this;
    return (
      <div>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={onLeaveFeedback}/>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positiveFeedback}
        />
      </div>
    );
  }
}

export default App;