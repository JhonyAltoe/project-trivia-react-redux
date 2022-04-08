import React, { Component } from 'react';
import './styles.css';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import triviaImg from '../../images/trivia.png';

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
    const { score } = this.props;
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.player.score,
});

Header.propTypes = {
  info: propTypes.string,
  score: propTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Header);
