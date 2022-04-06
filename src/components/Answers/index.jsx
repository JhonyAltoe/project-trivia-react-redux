import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Answers extends Component {
  render() {
    const { alternatives, correct } = this.props;
    return (
      <div data-testid="answer-options">
        { alternatives.map((each, index) => {
          if (each === correct) {
            return (
              <button
                data-testid="correct-answer"
                type="button"
                key={ index }
              >
                { each }
              </button>
            );
          }
          return (
            <button
              data-testid={ `wrong-answer-${index}` }
              type="button"
              key={ index }
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
}.isRequired;

export default Answers;
