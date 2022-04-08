import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { connect } from 'react-redux';
import { secondsTimer } from '../../redux/actions';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const oneSecond = 1000;
    this.countdown = setInterval(() => this.timer(), oneSecond);
  }

  componentWillUnmount() {
    clearInterval(this.countdown);
  }

  timer = () => {
    const { stopWatch, time } = this.props;
    if (stopWatch >= 1) {
      return time(stopWatch - 1);
    }
    if (stopWatch === 0) {
      const { timeOutFunc } = this.props;
      timeOutFunc();
    }
  };

  render() {
    const { stopWatch } = this.props;
    return <div className="timer-container">{stopWatch}</div>;
  }
}

const mapStateToProps = (state) => ({
  stopWatch: state.reducerTimer.seconds,
});

const mapDispatchToProps = (dispatch) => ({
  time: (payload) => dispatch(secondsTimer(payload)),
});

Timer.propTypes = {
  timeOutFunc: PropTypes.func,
  stopWatch: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
