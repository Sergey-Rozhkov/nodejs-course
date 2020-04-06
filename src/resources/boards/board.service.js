const boardsRepo = require('./board.memory.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => boardsRepo.getAll();

const getById = id => boardsRepo.getById(id);

const create = boardData => boardsRepo.create(boardData);

const updateById = (id, newData) => boardsRepo.updateById(id, newData);

const deleteById = id => {
  boardsRepo.deleteById(id);
  tasksService.deleteByBoardId(id);
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
