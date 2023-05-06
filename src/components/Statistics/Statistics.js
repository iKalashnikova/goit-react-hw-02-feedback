import React from 'react';
import { Feedback, Span } from './Statistics.styled';

export const Statistics = ({total, percentage, good, neutral, bad }) => (
  <div>
        <Feedback>Good: <Span>{good}</Span></Feedback>
        <Feedback>Neutral: <Span>{neutral}</Span></Feedback>
        <Feedback>Bad: <Span>{bad}</Span></Feedback>
        <Feedback>Total: <Span>{total}</Span></Feedback>
        <Feedback>Positive feedback: <Span>{percentage} %</Span></Feedback>
        </div>
)