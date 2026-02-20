const errors = {
  validationErrors: {
    statusCode400: 400,
    missingId: "Validation Error: id is required",
    missingEmail: "Validation Error: email is required",
    missingUsername: "Validation Error: username is required",
    missingFirstname: "Validation Error: firstName is required",
    missingLastname: "Validation Error: lastName is required",
    emailMustBeString: "Validation Error: Email parameter must be a string",
  },
  applicationErrors: {
    statusCode409: 409,
    statusCode404: 404,
    usernameTaken: "Application Error: Username already taken",
    emailAlreadyInUse: "Application Error: Email already in use",
    userNotFound: "Application Error: User not found",
    uniqueFieldConstraintViolation: `Application Error: Your query violated a unique field constraint`,
  },
  serverErrors: {
    statusCode500: 500,
    serverError: `ServerError: Unknown server error`,
    passwordGenerationFailed: `ServerError: Password generation failed`,
  },
};

export default errors;
