import React, { Component } from 'react';
import propTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: '',
      name: '',
    };

    this.getPlayerInfo = this.getPlayerInfo.bind(this);
  }

  componentDidMount() {
    this.getPlayerInfo();
  }

  getPlayerInfo() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    this.setState({
      picture: ranking.picture, name: ranking.name });
  }

  render() {
    const { picture, name } = this.state;
    const { info } = this.props;
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
        <p data-testid="header-score">{ info.score }</p>
      </div>
    );
  }
}

Header.propTypes = {
  info: propTypes.string,
}.isRequired;

export default Header;
