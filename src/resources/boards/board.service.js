const boardsRepo = require('./board.repository');
const tasksService = require('../tasks/task.service');

const create = data => boardsRepo.create(data);
const getById = id => boardsRepo.getById(id);
const updateById = data => boardsRepo.updateById(data);
const deleteById = async id => {
  await boardsRepo.deleteById(id);
  await tasksService.deleteByBoardId(id);
};
const getAll = () => boardsRepo.getAll();

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
