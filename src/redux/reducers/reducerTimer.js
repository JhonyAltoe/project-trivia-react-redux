const initialState = {
  seconds: 30,
};

const reducerTimer = (state = initialState, action) => {
  switch (action.type) {
  case 'SECONDS_TIMER':
    return {
      seconds: action.payload,
    };
  default:
    return state;
  }
};

export default reducerTimer;
