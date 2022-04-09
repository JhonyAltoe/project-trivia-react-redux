import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import he from 'he';

class Question extends React.Component {
  render() {
    const { category, question } = this.props;
    return (
      <div className="question-container">
        <div
          className="question-category"
          data-testid="question-category"
        >
          { category }
        </div>
        <div
          className="question-text"
          data-testid="question-text"
        >
          { he.decode(question) }
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  category: PropTypes.string,
  question: PropTypes.string,
}.isRequired;

export default Question;
