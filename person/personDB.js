const PersonModel = require('./personModel');

exports.saveNewPerson = async function(personData) {
  const newPerson = new PersonModel(personData);
  return await newPerson.save();
}

exports.findPersonWithName = async function(name) {
  const existingPerson = await PersonModel.findOne({ name }).exec();
  return existingPerson;
}

exports.findPersonWithID = async function(id) {
  const existingPerson = await PersonModel.findById(id).exec();
  return existingPerson;
}

exports.editPerson = async function(id, name) {
  await PersonModel.findByIdAndUpdate(id, { name });
  return await exports.findPersonWithID(id);
}

exports.deletePerson = async function(id) {
  return await PersonModel.findByIdAndDelete(id);
}