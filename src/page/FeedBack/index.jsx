import React from 'react';
import Header from '../../components/Header';
import './styles.css';

class FeedBack extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  verifyScore = () => {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    const THREE = 3;
    console.log(ranking.numberOfCorrectAnswers);
    return (
      <p data-testid="feedback-text">
        {ranking.numberOfCorrectAnswers < THREE ? 'Could be better...' : 'Well Done!'}
      </p>);
  };

  render() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    return (
      <div className="feedback-container">
        <Header info={ ranking } />
        <div className="feedback-field">
          {this.verifyScore()}
        </div>
      </div>
    );
  }
}

export default FeedBack;
