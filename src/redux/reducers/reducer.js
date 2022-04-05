const initialState = {
  token: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SUCCESS_REQUEST':
    return {
      ...state,
      token: action.payload,
    };
  case 'FAILED_REQUEST':
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
};

export default reducer;
