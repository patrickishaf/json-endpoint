const { model, Schema } = require('mongoose');

const personSchema = new Schema({
  name: String
})

const PersonModel = model('Person', personSchema);

module.exports = PersonModel;