import React from 'react';
import PropTypes from 'prop-types';
import { getStorage } from '../../services/handleLocalStorage';
import './styles.css';

class Ranking extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  showRanking = () => {
    const ranking = getStorage('rankingPlayers').sort((a, b) => b.score - a.score);
    return (
      <>
        {ranking.map((each, index) => (
          <div key={ index } className="ranking-container">
            <img src={ each.picture } alt={ each.name } />
            <p data-testid={ `player-name-${index}` }>{ each.name }</p>
            <p data-testid={ `player-score-${index}` }>{ each.score }</p>
          </div>
        ))}
      </>
    );
  };

  redirectHome = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <div className="default-container">
        <div className="default-field ranking-field">
          <h1 data-testid="ranking-title">Ranking</h1>
          { this.showRanking() }
        </div>
        <button
          className="default-button"
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
