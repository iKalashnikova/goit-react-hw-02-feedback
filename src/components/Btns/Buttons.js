import React from 'react';
import {Buttons} from './Btns.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <Buttons key={option} type="button" onClick={() => onLeaveFeedback(option)}>
        {option}
      </Buttons>
    ))}
  </div>
);
