import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

class FeedBack extends React.Component {
  constructor() {
    super();
    this.state = {};
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
});

FeedBack.propTypes = {
  score: PropTypes.number,
  assertions: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(FeedBack);
