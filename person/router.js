const { Router } = require('express');
const controller = require('./personControllers');
const validator = require('./validators');

const personRouter = Router();

personRouter.get('/:user_id', validator.validateReqParams, controller.getPersonByID);

personRouter.post('/', validator.validateReqBody, controller.createNewPerson);

personRouter.patch('/:user_id', validator.validateReqParams, validator.validateReqBody, controller.editPerson);

personRouter.delete('/:user_id', validator.validateReqParams, controller.deletePerson);

module.exports = personRouter;