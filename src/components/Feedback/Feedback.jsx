import React, { Component } from 'react';
import css from './Feedback.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterOfFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const rewiev = this.state;
    const options = Object.keys(this.state);

    return (
      <section className={css.block}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.counterOfFeedback}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section>
            <Statistics
              good={rewiev.good}
              neutral={rewiev.neutral}
              bad={rewiev.bad}
              totalFeedback={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage() + '%'}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </section>
    );
  }
}

export default Feedback;
