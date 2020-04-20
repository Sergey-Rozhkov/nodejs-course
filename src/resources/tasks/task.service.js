const tasksRepo = require('./task.repository');
const Task = require('./task.model');

const create = data => {
  const task = new Task(data);
  return tasksRepo.create(task);
};
const getById = id => tasksRepo.getById(id);
const updateById = data => tasksRepo.updateById(data);
const deleteById = id => tasksRepo.deleteById(id);
const getByBoardId = boardId => tasksRepo.getByBoardId(boardId);
const deleteByBoardId = boardId => tasksRepo.deleteByBoardId(boardId);
const unassignByUserId = userId => tasksRepo.unassignByUserId(userId);

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
  getByBoardId,
  deleteByBoardId,
  unassignByUserId
};
