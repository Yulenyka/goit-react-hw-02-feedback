
import React, {Component} from "react";
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from "./Statistics/Statistics";
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
  };

  onLeaveFeedback = ({ target: { name } }) => {
    const newName = name.toLowerCase();
    this.setState(() => {
      return { [newName]: this.state[newName] + 1 };
    });
  };

  render() {
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
             <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
export default App;
