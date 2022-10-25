import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';

function Statistics({ good, neutral, bad, totalFeedback, positivePercentage }) {
  return (
    <div className={css.stat__wrap}>
      <h2>Statistics</h2>
      <span className={css.stat__item}>Good: {good}</span>
      <span className={css.stat__item}>Neutral: {neutral}</span>
      <span className={css.stat__item}>Bad: {bad}</span>
      <span className={css.stat__item}>Total: {totalFeedback}</span>
      <span className={css.stat__item}>Total: {positivePercentage}</span>
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
