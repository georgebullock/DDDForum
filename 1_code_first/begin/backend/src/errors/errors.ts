const errors = {
  validationErrors: {
    statusCode: 400,
    missingEmail: "Validation Error: email is required",
    missingUsername: "Validation Error: username is required",
    missingFirstname: "Validation Error: firstName is required",
    missingLastname: "Validation Error: lastName is required",
    emailMustBeString: "Validation Error: Email parameter must be a string",
  },
  applicationErrors: {
    statusCode: 409,
    usernameTaken: "Application Error: Username already taken",
    emailAlreadyInUse: "Application Error: Email already in use",
  },
  serverErrors: {
    statusCode: 500,
    serverError: `ServerError: Unknown server error`,
    passwordGenerationFailed: `ServerError: Password generation failed`,
  },
};

export default errors;
