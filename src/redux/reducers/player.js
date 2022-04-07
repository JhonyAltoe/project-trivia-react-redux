const initialState = {
  score: 0,
};

const player = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_SCORE':
    return { ...state, score: action.payload };
  default:
    return state;
  }
};

export default player;
