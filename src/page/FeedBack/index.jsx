import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import './styles.css';

class FeedBack extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  resetGame = () => {
    const { history } = this.props;
    history.push('/');
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
        {this.verifyScore()}
        <button
          data-testid="btn-play-again"
          type="button"
          onClick={ this.resetGame }
        >
          Play Again
        </button>
      </div>
    );
  }
}

FeedBack.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default FeedBack;
