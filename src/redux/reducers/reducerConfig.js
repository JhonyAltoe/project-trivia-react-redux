const initialState = {
  configs: {
    type: '',
    category: '',
    difficulty: '',
  },
};

const reducerConfig = (state = initialState, action) => {
  switch (action.type) {
  case 'SAVE_CONFIG':
    return {
      ...state,
      configs: action.payload,
    };
  default:
    return state;
  }
};

export default reducerConfig;
