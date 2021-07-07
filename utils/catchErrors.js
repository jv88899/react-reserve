function catchErrors(error, displayError) {
  let errorMsg;
  if (error.response) {
    errorMsg = error.response.data;
    console.log("Error response", errorMsg);

    if (error.response.data.error) {
      errorMsg = error.response.data.error.message;
    }
  } else if (error.request) {
    errorMsg = error.request;
    console.log("Error request", errorMsg);
  } else {
    errorMsg = error.message;
    console.log(errorMsg);
  }
  displayError(errorMsg);
}
