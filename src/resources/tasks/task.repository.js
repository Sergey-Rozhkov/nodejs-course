const Tasks = require('./task.model');

const create = async data => Tasks.create(data);
const getById = async id => Tasks.findById(id);
const updateById = async data => Tasks.updateOne({ _id: data.id }, data);
const deleteById = async id => Tasks.deleteOne({ _id: id });
const getByBoardId = async boardId => Tasks.find({ boardId });
const deleteByBoardId = async boardId => Tasks.deleteMany({ boardId });
const unassignByUserId = async userId =>
  Tasks.updateMany({ userId }, { userId: null });

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
  getByBoardId,
  deleteByBoardId,
  unassignByUserId
};
