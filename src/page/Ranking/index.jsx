import React from 'react';
import PropTypes from 'prop-types';
import { getStorage } from '../../services/handleLocalStorage';

class Ranking extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  showRanking = () => {
    const ranking = getStorage('rankingPlayers').sort((a, b) => b.score - a.score);
    return (
      <div>
        {ranking.map((each, index) => (
          <div key={ index }>
            <img src={ each.picture } alt={ each.name } />
            <p data-testid={ `player-name-${index}` }>{ each.name }</p>
            <p data-testid={ `player-score-${index}` }>{ each.score }</p>
          </div>
        ))}
      </div>
    );
  };

  redirectHome = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <div>
        <h3 data-testid="ranking-title">Ranking</h3>
        { this.showRanking() }
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
