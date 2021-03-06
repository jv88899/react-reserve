function catchErrors(error, displayError) {
  let errorMsg;
  if (error.response) {
    errorMsg = error.response.data;
    console.error("Error response", errorMsg);

    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    errorMsg = error.request;
    console.error("Error request", errorMsg);
  } else {
    errorMsg = error.message;
    console.error(errorMsg);
  }
  displayError(errorMsg);
}

export default catchErrors;
