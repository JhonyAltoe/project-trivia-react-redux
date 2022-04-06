import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Answers extends Component {
  render() {
    const { alternatives, correct,
      showAnswersResults, borderCorrect, borderWrong } = this.props;
    console.log(correct);
    return (
      <div data-testid="answer-options">
        { alternatives.map((each, index) => {
          if (each === correct) {
            return (
              <button
                data-testid="correct-answer"
                type="button"
                className={ borderCorrect }
                key={ index }
                onClick={ showAnswersResults }
              >
                { each }
              </button>
            );
          }
          return (
            <button
              data-testid={ `wrong-answer-${index}` }
              type="button"
              className={ borderWrong }
              key={ index }
              onClick={ showAnswersResults }
            >
              { each }
            </button>
          );
        })}
      </div>
    );
  }
}

Answers.propTypes = {
  alternatives: PropTypes.string,
  correct: PropTypes.string,
  showAnswersResults: PropTypes.func,
  borderCorrect: PropTypes.string,
  borderWrong: PropTypes.string,
}.isRequired;

export default Answers;
