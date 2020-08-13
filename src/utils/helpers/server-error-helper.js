export const serverErrorHelper = (error) => {
  let errorMsg = 'Unknown Error. Please try later';
  if (error.response) {
    errorMsg = error.response.data.message;
  } else if (error.request) {
    errorMsg = 'Request Error';
  }

  return errorMsg;
};
