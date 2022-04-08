import React from 'react';

class Ranking extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  showRanking = () => {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    console.log(ranking);
    return (
      <p data-testid="feedback-text">
        {ranking.name}
      </p>);
  };

  render() {
    return (
      <div>
        <h3 data-testid="ranking-title">Ranking</h3>
      </div>
    );
  }
}

export default Ranking;
