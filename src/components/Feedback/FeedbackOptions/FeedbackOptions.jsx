import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul className={css.list}>
        {options.map(option => (
          <li key={option} className={css.item}>
            <button
              onClick={() => onLeaveFeedback(option)}
              className={css.button}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
