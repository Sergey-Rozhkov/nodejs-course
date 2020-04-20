const Board = require('./board.model');

const create = async data => Board.create(data);
const getById = async id => Board.findById(id);
const updateById = async data => Board.updateOne({ _id: data.id }, data);
const deleteById = async id => Board.deleteOne({ _id: id });

const getAll = async () => Board.find({});

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
  getAll
};
