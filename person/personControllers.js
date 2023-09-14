const ErrorMessages = require("../utils/errorMesages");
const { ErrorResponse, SuccessResponse } = require("../utils/responses");
const { saveNewPerson, findPersonWithID, editPerson, deletePerson } = require("./personDB");

exports.getPersonByID = async function(req, res) {
  const { user_id } = req.params;

  if (!user_id) return res.status(400).json(ErrorResponse.from(ErrorMessages.invalidReqParams));

  try {
    const result = await findPersonWithID(user_id);
    return res.status(200).json(SuccessResponse.from(result));
  } catch(e) {
    return res.status(500).json(ErrorResponse.from(ErrorMessages.internalServerError));
  }
}

exports.createNewPerson = async function(req, res) {
  const { name } = req.body;
  
  if (!name) return res.status(400).json(ErrorResponse.from(ErrorMessages.invalidReqBody));

  try {
    const result = await saveNewPerson({ name });
    res.status(200).json(SuccessResponse.from(result));
  } catch(e) {
    return res.status(500).json(ErrorResponse.from(ErrorMessages.internalServerError));
  }
}

exports.editPerson = async function(req, res) {
  const { user_id } = req.params;
  const { name } = req.body;

  if (!user_id) return res.status(400).json(ErrorResponse.from(ErrorMessages.invalidReqParams));
  if (!name) return res.status(400).json(ErrorResponse.from(ErrorMessages.invalidReqBody));

  try {
    const result = await editPerson(user_id, name);
    return res.status(200).json(SuccessResponse.from(result, 'updated user successfully'));
  } catch(e) {
    if (e.message === `Cast to ObjectId failed for value "${user_id}" (type string) at path "_id" for model "Person"`) {
      return res.status(400).json(ErrorResponse.from(ErrorMessages.invalidUserID));
    }
    
    return res.status(500).json(ErrorResponse.from(ErrorMessages.internalServerError));
  }
}

exports.deletePerson = async function(req, res) {
  const { user_id } = req.params;

  if (!user_id) return res.status(400).json(ErrorResponse.from(ErrorMessages.invalidReqParams));

  try {
    const result = await deletePerson(user_id);
    return res.status(200).json(SuccessResponse.from(result, `deleted ${result.name} successfully`));
  } catch(e) {
    return res.status(500).json(ErrorResponse.from(ErrorMessages.internalServerError));
  }
}