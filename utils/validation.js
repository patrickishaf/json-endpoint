const ErrorMessages = require("./errorMesages");
const { ErrorResponse } = require("./responses");

const createErrorResponseFromValidationState = (validationState) => {
  return ErrorResponse.from(validationState.error.details[0].message);
}

exports.validateBodyWithSchema = (schema, req, res, next) => {
  const validationState = schema.validate(req.body);
  if (validationState.hasOwnProperty('error')) {
    return res.status(400).json(createErrorResponseFromValidationState(validationState));
  }
  if (validationState.value === undefined) {
    return res.status(500).json(ErrorResponse.from(ErrorMessages.internalServerError));
  }
  next();
}

exports.validateParamsWithSchema = (req, res, next) => {
  const { user_id } = req.params;
  if (!user_id) {
    return res.status(400).json(ErrorResponse.from(ErrorMessages.noNameParam));
  }
  next();
}