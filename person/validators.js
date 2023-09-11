const Joi = require('joi');
const { validateBodyWithSchema, validateParamsWithSchema } = require('../utils/validation');

const personSchema = Joi.object({
  name: Joi.string().required(),
});

exports.validateReqBody = function(req, res, next) {
  return validateBodyWithSchema(personSchema, req, res, next);
}

exports.validateReqParams = function(req, res, next) {
  return validateParamsWithSchema(req, res, next);
}