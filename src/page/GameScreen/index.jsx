import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuestionsAndAnswers } from '../../api/handleAPI';
import Answers from '../../components/Answers';
import Question from '../../components/Question';
import Header from '../../components/Header';
import { attScore } from '../../redux/actions';
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
      info: { name: '', score: 0, picture: '' },
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

  showAnswersResults = (target) => {
    this.setState({
      borderCorrect: 'border-correct',
      borderWrong: 'border-wrong',
    });
    this.updateScore(target);
  }

  updateScore = (resposta) => {
    const { questions, index } = this.state;
    const { changeScore } = this.props;
    const X = 10;
    const HARD = 3;
    const MEDIUM = 2;
    const EASY = 1;
    let newScore = 0;
    const { name, picture, score } = JSON.parse(localStorage.getItem('ranking'));
    const timer = 1;
    if (resposta === questions[index].correct_answer) {
      if (questions[index].difficulty === 'hard') {
        newScore = score + (X + (timer * HARD));
        localStorage.setItem(
          'ranking', JSON.stringify({ name, score: newScore, picture }),
        );
        this.setState({ info: { name, score: newScore, picture } });
        changeScore(newScore);
      }
      if (questions[index].difficulty === 'medium') {
        newScore = score + (X + (timer * MEDIUM));
        localStorage.setItem(
          'ranking', JSON.stringify({ name, score: newScore, picture }),
        );
        this.setState({ info: { name, score: newScore, picture } });
        changeScore(newScore);
      }
      if (questions[index].difficulty === 'easy') {
        newScore = score + (X + (timer * EASY));
        localStorage.setItem(
          'ranking', JSON.stringify({ name, score: newScore, picture }),
        );
        this.setState({ info: { name, score: newScore, picture } });
        changeScore(newScore);
      }
    }
  }

  game = () => {
    const {
      questions,
      index,
      borderCorrect,
      borderWrong,
      alternatives,
      info,
      bttDisabled,
    } = this.state;
    return (
      <section className="gamescreen-component">
        <Header info={ info } />
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

const mapDispatchToProps = (dispatch) => ({
  changeScore: (state) => dispatch(attScore(state)),
});

GameScreen.propTypes = {
  token: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
