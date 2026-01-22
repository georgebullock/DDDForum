const errors = {
  validationErrors: {
    statusCode: 400,
    missingEmail: "Validation Error: email is required",
    missingUsername: "Validation Error: username is required",
    missingFirstname: "Validation Error: firstName is required",
    missingLastname: "Validation Error: lastName is required",
  },
  applicationErrors: {
    statusCode: 409,
    usernameTaken: "Application Error: UsernameAlreadyTaken",
    emailAlreadyInUse: "Application Error: EmailAlreadyInsUse",
  },
  serverError: {
    statusCode: 500,
    ServerError: `ServerError: Unknown server error`,
    passwordGenerationFailed: `ServerError: Password generation failed`,
  },
};

export default errors;
