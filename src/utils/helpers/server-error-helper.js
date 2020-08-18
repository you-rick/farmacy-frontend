import { LOCALE } from '../../locale';

export const serverErrorHelper = (error) => {
  let errorMsg = LOCALE.errors.server.unknown;
  if (error.response) {
    errorMsg = error.response.data.message;
  } else if (error.request) {
    errorMsg = LOCALE.errors.server.request;
  }

  return errorMsg;
};
