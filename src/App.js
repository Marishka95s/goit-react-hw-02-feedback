import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';

class App extends Component {
  static defaultProps = {
    totalFeedbacks: 0,
    percentageOfGoodFeedb: 0,
  }

  static propTypes = {    
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  incrementGoodFeedbacks = () => {
    console.log('Click on good option');
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      }      
    })
  }
  incrementNeutralFeedbacks = () => {
    console.log('Click on neutral option');
    this.setState(prevState => {
      return {
      neutral: prevState.neutral + 1,
    }
    })
  }
  incrementBadFeedbacks = () => {
    this.setState(prevState => {
      console.log('Click on bad option');
      return {
      bad: prevState.bad + 1,
    }
    })
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = good + bad + neutral;
    return totalFeedbacks;
  }
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const percentageOfGoodFeedb = ((good / (good + bad + neutral)) * 100).toFixed(2);
    return percentageOfGoodFeedb;
  }

  render(totalFeedbacks) {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Please leave feedback</h1>
        </header>

        <Section title="">
          <FeedbackOptions 
          incrementGoodFeedbacks={this.incrementGoodFeedbacks} incrementNeutralFeedbacks={this.incrementNeutralFeedbacks} incrementBadFeedbacks={this.incrementBadFeedbacks} />
        </Section>
        { (totalFeedbacks!== 0) 
        ? <Section title="Statistics">
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </Section> 
        : <Notification message="No feedback given" /> }        
      </div>
    );
  }  
}

export default App;
