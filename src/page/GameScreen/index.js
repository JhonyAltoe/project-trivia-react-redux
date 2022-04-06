import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestionsAndAnswers } from '../../api/handleAPI';
import Answers from '../../components/Answers';
import Question from '../../components/Question';

class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      index: 0,
    };
  }

  componentDidMount() {
    this.mountQuestions();
  }

  mountQuestions = async () => {
    const { token } = this.props;
    const { results } = await fetchQuestionsAndAnswers(token);
    this.setState({ questions: results });
  }

  nextQuestion = () => {
    const { index, questions } = this.state;
    if (index < questions.length) {
      this.setState({ index: index + 1 });
    }
  }

  gererateAlternatives = () => {
    const { questions, index } = this.state;
    const alternatives = [
      questions[index].correct_answer, ...questions[index].incorrect_answers,
    ];
    return this.shuffleArray(alternatives);
  }

  shuffleArray = (array) => {
    const shuffledArray = [...array];
    let currentIndex = shuffledArray.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex], shuffledArray[currentIndex]];
    }
    return shuffledArray;
  }

  game = () => {
    const { questions, index } = this.state;
    return (
      <div>
        <Question
          category={ questions[index].category }
          question={ questions[index].question }
        />
        <Answers
          alternatives={ this.gererateAlternatives() }
          correct={ questions[index].correct_answer }
        />
        <button type="submit" onClick={ this.nextQuestion }>PRÓXIMA</button>
      </div>
    );
  }

  render() {
    const { questions } = this.state;
    if (questions.length > 0) {
      return this.game();
    }
    return (
      <h1>Loading...</h1>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

GameScreen.propTypes = {
  token: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps)(GameScreen);
