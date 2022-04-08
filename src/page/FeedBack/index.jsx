import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import './styles.css';

class FeedBack extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.redirectToRanking = this.redirectToRanking.bind(this);
  }

  verifyScore = () => {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    const THREE = 3;
    return (
      <p data-testid="feedback-text">
        {ranking.numberOfCorrectAnswers < THREE ? 'Could be better...' : 'Well Done!'}
      </p>);
  };

  redirectToRanking = () => {
    console.log('fui chamado');
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    return (
      <div className="feedback-container">
        <Header info={ ranking } />
        <div className="feedback-field">
          {this.verifyScore()}
        </div>
        <button
          data-testid="btn-ranking"
          type="button"
          onClick={ this.redirectToRanking }
        >
          VER RANKING
        </button>
      </div>
    );
  }
}

FeedBack.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default FeedBack;
