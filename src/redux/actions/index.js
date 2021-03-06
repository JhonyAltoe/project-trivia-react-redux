import { fetchToken } from '../../api/handleAPI';

const successRequest = (payload) => ({
  type: 'SUCCESS_REQUEST',
  payload,
});

const failedRequest = (payload) => ({
  type: 'FAILED_REQUEST',
  payload,
});

export const getToken = () => (
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

export const attScore = (score, assertions) => ({
  type: 'UPDATE_SCORE',
  score,
  assertions,
});

export const saveGameConfig = (payload) => ({
  type: 'SAVE_CONFIG',
  payload,
});
