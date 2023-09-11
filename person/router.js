const { Router } = require('express');
const controller = require('./personControllers');
const validator = require('./validators');

const personRouter = Router();

personRouter.get('/:name', validator.validateReqParams, controller.getPersonByName);

personRouter.post('/', validator.validateReqBody, controller.createNewPerson);

personRouter.patch('/:name', validator.validateReqParams, validator.validateReqBody, controller.editPerson);

personRouter.delete('/:name', validator.validateReqParams, controller.deletePerson);

module.exports = personRouter;