import React, { Component } from 'react';
import './styles.css';
import triviaImg from '../../images/trivia.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: '',
      name: '',
      score: 0,
    };

    this.getPlayerInfo = this.getPlayerInfo.bind(this);
  }

  componentDidMount() {
    this.getPlayerInfo();
  }

  getPlayerInfo() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    if (ranking) {
      this.setState({
        picture: ranking.picture, name: ranking.name, score: ranking.score });
    }
  }

  render() {
    const { picture, name, score } = this.state;
    return (
      <div className="header-component">
        <img
          src={ triviaImg }
          alt="Logo trivia"
        />
        <div className="header-user-infos">
          <div data-testid="header-player-name">{ name }</div>
          <div>
            Pontuação:
            {' '}
            <span data-testid="header-score">{ score }</span>
          </div>
          <img
            className="profile-image"
            data-testid="header-profile-picture"
            src={ picture }
            alt="player avatar"
          />
        </div>
      </div>
    );
  }
}

export default Header;
