import { fetchToken } from '../../api/handleAPI';

const successRequest = (payload) => ({
  type: 'SUCCESS_REQUEST',
  payload,
});

const failedRequest = (payload) => ({
  type: 'FAILED_REQUEST',
  payload,
});

const getToken = () => (
  async (dispatch) => {
    try {
      const data = await fetchToken();
      dispatch(successRequest(data.token));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  }
);

export const secondsTimer = (payload) => ({
  type: 'SECONDS_TIMER',
  payload,
});

export default getToken;
