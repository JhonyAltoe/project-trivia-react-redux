import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestionsAndAnswers } from '../../api/handleAPI';
import Answers from '../../components/Answers';
import Question from '../../components/Question';
import Header from '../../components/Header';
import Timer from '../../components/Timer';
import './styles.css';

class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      alternatives: [],
      index: 0,
      borderCorrect: '',
      borderWrong: '',
      bttDisabled: false,
    };
  }

  componentDidMount() {
    this.mountQuestions();
  }

  mountQuestions = async () => {
    const { token } = this.props;
    const { results } = await fetchQuestionsAndAnswers(token);
    this.setState({ questions: results }, () => {
      this.generateAlternatives();
    });
  }

  nextQuestion = () => {
    const { index, questions } = this.state;
    if (index < questions.length - 1) {
      this.setState({
        index: index + 1,
        borderCorrect: '',
        borderWrong: '',
      }, () => {
        this.generateAlternatives();
      });
    }
  }

  generateAlternatives = () => {
    const { questions, index } = this.state;
    const alternatives = [
      questions[index].correct_answer, ...questions[index].incorrect_answers,
    ];
    const shuffledAlternatives = this.shuffleArray(alternatives);
    this.setState({ alternatives: shuffledAlternatives });
  }

  timeOutFunc = () => {
    this.setState({ bttDisabled: true });
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

  showAnswersResults = () => {
    this.setState({
      borderCorrect: 'border-correct',
      borderWrong: 'border-wrong',
    });
  }

  game = () => {
    const {
      questions,
      index,
      borderCorrect,
      borderWrong,
      alternatives,
      bttDisabled,
    } = this.state;
    return (
      <section className="gamescreen-component">
        <Header />
        <div className="gamescreen-questions-field">
          <div className="questions-area">
            <Question
              category={ questions[index].category }
              question={ questions[index].question }
            />
            <Answers
              bttDisabled={ bttDisabled }
              alternatives={ alternatives }
              correct={ questions[index].correct_answer }
              showAnswersResults={ this.showAnswersResults }
              borderCorrect={ borderCorrect }
              borderWrong={ borderWrong }
            />
          </div>
          <div className="button-area">
            { borderCorrect !== '' && (
              <button
                type="submit"
                data-testid="btn-next"
                onClick={ this.nextQuestion }
              >
                PRÓXIMA
              </button>
            )}
          </div>
        </div>
        <Timer timeOutFunc={ this.timeOutFunc } />
      </section>
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
