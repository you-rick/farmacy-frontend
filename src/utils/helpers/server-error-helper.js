import { LOCALE } from '../../locale';
import { toggleIsDataFetching } from '../../store/appReducer';
import { setNote } from '../../store/notificationReducer';

export const serverErrorHelper = (dispatch, error, msg) => {
  const { baseMsg, unknown, request } = LOCALE.errors.server;

  let errorMsg = unknown;
  if (msg) {
    errorMsg = msg;
  } else if (error.response) {
    const { message, detailMessage } = error.response.data;
    errorMsg = detailMessage || message || baseMsg;
  } else if (error.request) {
    errorMsg = request;
  }

  dispatch(toggleIsDataFetching(false));
  dispatch(setNote({
    msg: errorMsg,
    type: 'error',
    error: true,
    success: false,
  }));
};
