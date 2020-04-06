const tasksRepo = require('./task.memory.repository');

const getAll = boardId => tasksRepo.getAll(boardId);

const getById = (boardId, taskId) => tasksRepo.getById(boardId, taskId);

const create = (boardId, taskData) => tasksRepo.create(boardId, taskData);

const update = (boardId, taskId, newData) =>
  tasksRepo.updateById(boardId, taskId, newData);

const deleteById = (boardId, taskId) => tasksRepo.deleteById(boardId, taskId);

const deleteByBoardId = boardId => tasksRepo.deleteByBoardId(boardId);

const discharge = id => tasksRepo.discharge(id);

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  deleteByBoardId,
  discharge
};
