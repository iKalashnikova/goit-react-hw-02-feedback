import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Btns/Buttons';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  // handleBtnNeutral = () => {
  //   this.setState((prevState) => ({neutral: prevState.neutral + 1,})
  //   )
  // }

  // handleBtnBad = () => {
  //   this.setState((prevState) => ({bad: prevState.bad + 1,})
  //   )
  // }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          gap: 50,
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleBtnClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
            />) : <Notification message="There is no feedback" />}
        </Section>
        
      </div>
    );
  }
}

export default App;
