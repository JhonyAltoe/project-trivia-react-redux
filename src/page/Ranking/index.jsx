import React from 'react';
import PropTypes from 'prop-types';

class Ranking extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  showRanking = () => {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    return (
      <p data-testid="feedback-text">
        {ranking.name}
      </p>);
  };

  redirectHome = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <div>
        <h3 data-testid="ranking-title">Ranking</h3>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.redirectHome }
        >
          Voltar para a tela inicial
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Ranking;
