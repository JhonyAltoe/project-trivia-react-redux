import React, { Component } from 'react';
import * as EmailValidator from 'email-validator';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { getToken, secondsTimer } from '../../redux/actions';
import './styles.css';
import triviaImg from '../../images/trivia.png';
import { setStorage } from '../../services/handleLocalStorage';

const THIRTY = 30;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputPlayerName: '',
      inputGravatarEmail: '',
      bttDisabled: true,
    };
  }

  inputChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => this.verifyButton());
  }

  verifyButton = () => {
    const { inputPlayerName, inputGravatarEmail } = this.state;
    const minCharacters = 6;
    const validate = ((inputPlayerName.length >= minCharacters)
      && EmailValidator.validate(inputGravatarEmail));
    if (validate) this.setState({ bttDisabled: false });
  }

  startGame = async () => {
    const { history, fetchAPI, time } = this.props;
    time(THIRTY);
    await fetchAPI();
    history.push('/gamescreen');
    fetchAPI();
    const { inputPlayerName, inputGravatarEmail } = this.state;
    const thumbnail = `https://www.gravatar.com/avatar/${md5(inputGravatarEmail).toString()}`;
    setStorage('ranking', {
      name: inputPlayerName, score: 0, picture: thumbnail, numberOfCorrectAnswers: 0,
    });
  }

  render() {
    const { bttDisabled, inputPlayerName, inputGravatarEmail } = this.state;
    return (
      <section className="container-login-main">
        <div className="container-login">
          <img src={ triviaImg } alt="Logo trivia" />
          <form>
            <input
              id="input-player-name"
              name="inputPlayerName"
              data-testid="input-player-name"
              onChange={ this.inputChange }
              value={ inputPlayerName }
              type="text"
              placeholder="Digite seu nickname"
            />
            <input
              id="input-gravatar-email"
              name="inputGravatarEmail"
              onChange={ this.inputChange }
              value={ inputGravatarEmail }
              data-testid="input-gravatar-email"
              type="text"
              placeholder="Digite seu email"
            />
            <button
              className="default-pink-button login-pink-button"
              disabled={ bttDisabled }
              type="button"
              data-testid="btn-play"
              onClick={ this.startGame }
            >
              Play
            </button>
          </form>
          <Link
            to="/configuracoes"
          >
            <button
              className="default-purble-button"
              type="button"
              data-testid="btn-settings"
            >
              Configurações
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(getToken()),
  time: (payload) => dispatch(secondsTimer(payload)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
