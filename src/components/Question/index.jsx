import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  render() {
    const { category, question } = this.props;
    return (
      <div>
        <h3 data-testid="question-category">{ category }</h3>
        <p data-testid="question-text">{ question }</p>
      </div>
    );
  }
}

Question.propTypes = {
  category: PropTypes.string,
  question: PropTypes.string,
}.isRequired;

export default Question;
