const User = require('./user.model');

const create = async data => User.create(data);
const getById = async id => User.findById(id);
const updateById = async data => User.updateOne({ _id: data.id }, data);
const deleteById = async id => User.deleteOne({ _id: id });
const getAll = async () => User.find({});

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
  getAll
};
