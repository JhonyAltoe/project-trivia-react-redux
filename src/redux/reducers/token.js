const initialState = {
  token: '',
};

const token = (state = initialState, action) => {
  switch (action.type) {
  case 'SUCCESS_REQUEST':
    return action.payload;
  case 'FAILED_REQUEST':
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
};

export default token;
