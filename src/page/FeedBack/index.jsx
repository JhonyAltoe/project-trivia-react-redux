import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import './styles.css';

class FeedBack extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.redirectToRanking = this.redirectToRanking.bind(this);
  }

  resetGame = () => {
    const { history } = this.props;
    history.push('/');
  }

  verifyScore = () => {
    const { assertions } = this.props;
    const THREE = 3;
    return (
      <p data-testid="feedback-text">
        {assertions < THREE ? 'Could be better...' : 'Well Done!'}
      </p>);
  };

  redirectToRanking = () => {
    console.log('fui chamado');
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    const { score, assertions } = this.props;
    return (
      <div className="feedback-container">
        <Header />
        <div className="feedback-field">
          <div className="feedback-field-infos">
            <div className="final-msg-game font-size-40 ">{this.verifyScore()}</div>
            <div className="font-size-30">
              Total score:
              {' '}
              <span data-testid="feedback-total-score">{score}</span>
            </div>
            <div className="font-size-30">
              Total questions:
              {' '}
              <span data-testid="feedback-total-question">{assertions}</span>
            </div>
            <button
              className="feedback-button color-button-purple"
              data-testid="btn-ranking"
              type="button"
              onClick={ this.redirectToRanking }
            >
              Ver ranking
            </button>
          </div>
          <div className="feedback-field-button">
            <button
              className="feedback-button color-button-pink"
              data-testid="btn-play-again"
              type="button"
              onClick={ this.resetGame }
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(FeedBack);

FeedBack.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  score: PropTypes.number,
  assertions: PropTypes.number,
}.isRequired;
