import React, { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickToGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  onClickToNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  onClickToBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
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

    return (
      <section className={css.block}>
        <h2>Please leave feedback</h2>
        <div>
          <button
            className={css.button}
            type="button"
            onClick={this.onClickToGood}
          >
            Good
          </button>
          <button
            className={[css.button, css.neutral].join(' ')}
            type="button"
            onClick={this.onClickToNeutral}
          >
            Neutral
          </button>
          <button
            className={[css.button, css.bad].join(' ')}
            type="button"
            onClick={this.onClickToBad}
          >
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <div className={css.stat__wrap}>
          <span className={css.stat__item}>Good: {rewiev.good}</span>
          <span className={css.stat__item}>Neutral: {rewiev.neutral}</span>
          <span className={css.stat__item}>Bad: {rewiev.bad}</span>
          <span className={css.stat__item}>
            Total: {this.countTotalFeedback()}
          </span>
          <span className={css.stat__item}>
            Total: {this.countPositiveFeedbackPercentage()}%
          </span>
        </div>
      </section>
    );
  }
}

export default Feedback;
