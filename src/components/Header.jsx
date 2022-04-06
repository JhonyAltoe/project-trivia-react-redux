import React, { Component } from 'react';

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
    console.log(ranking);
    if (ranking) {
      this.setState({
        picture: ranking.picture, name: ranking.name, score: ranking.score });
    }
  }

  render() {
    const { picture, name, score } = this.state;
    return (
      <div>
        <img
          data-testid="header-profile-picture"
          src={ picture }
          alt="player avatar"
          height="300"
          width="300"
        />
        <p data-testid="header-player-name">{ name }</p>
        <p data-testid="header-score">{ score }</p>
      </div>
    );
  }
}

export default Header;
