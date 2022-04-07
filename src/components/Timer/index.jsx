import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 30,
    };
  }

  componentDidMount() {
    const MIL = 1000;
    this.countdown = setInterval(() => this.timer(), MIL);
  }

  componentWillUnmount() {
    clearInterval(this.countdown);
  }

  timer = () => {
    const { seconds } = this.state;
    if (seconds >= 1) {
      return this.setState({ seconds: seconds - 1 });
    }
    if (seconds === 0) {
      const { timeOutFunc } = this.props;
      timeOutFunc();
    }
  }

  render() {
    const { seconds } = this.state;
    return <div className="timer-container">{seconds}</div>;
  }
}

Timer.propTypes = {
  timeOutFunc: PropTypes.func,
}.isRequired;

export default Timer;
