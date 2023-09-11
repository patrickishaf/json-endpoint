exports.getPersonByName = function(req, res) {
  const { name } = req.params;
  res.status(200).send(name);
}

exports.createNewPerson = function(req, res) {
  const { name } = req.body;
  res.status(200).send(name);
}

exports.editPerson = function(req, res) {
  const { name } = req.params;
  const { name: newName } = req.body;
  res.status(200).json({ name, newName });
}

exports.deletePerson = function(req, res) {
  const { name } = req.params;
  res.status(200).send(name);
}