import React from 'react';
import Header from '../../components/Header';

class FeedBack extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  verifyScore = () => {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    const THREE = 3;
    if (ranking.score < THREE) {
      return <p data-testid="feedback-text">Could be better</p>;
    }
    return <p data-testid="feedback-text">Well Done!</p>;
  };

  render() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    return (
      <div>
        <Header info={ ranking } />
        {this.verifyScore()}
      </div>
    );
  }
}

export default FeedBack;
