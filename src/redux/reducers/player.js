const initialState = {
  score: 0,
  assertions: 0,
};

const player = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_SCORE':
    return {
      ...state,
      score: action.score,
      assertions: action.assertions,
    };
  default:
    return state;
  }
};

export default player;
