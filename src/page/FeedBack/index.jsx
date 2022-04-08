import React from 'react';
import { connect } from 'react-redux';
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
    const { assertions } = this.props;
    const THREE = 3;
    return (
      <p data-testid="feedback-text">
        {assertions < THREE ? 'Could be better...' : 'Well Done!'}
      </p>);
  };

  render() {
    const { score, assertions } = this.props;
    return (
      <div>
        <Header />
        {this.verifyScore()}
        <p data-testid="feedback-total-score">{score}</p>
        <p data-testid="feedback-total-question">{assertions}</p>
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
