import { LOCALE } from '../../locale';
import { toggleIsDataFetching } from '../../store/appReducer';
import { setNote } from '../../store/notificationReducer';

export const serverErrorHelper = (dispatch, error) => {
  let errorMsg = LOCALE.errors.server.unknown;
  if (error.response) {
    errorMsg = error.response.data.message;
  } else if (error.request) {
    errorMsg = LOCALE.errors.server.request;
  }

  dispatch(toggleIsDataFetching(false));
  dispatch(setNote({
    msg: errorMsg,
    type: 'error',
    error: true,
    success: false,
  }));
};
