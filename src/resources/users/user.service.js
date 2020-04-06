const usersRepo = require('./user.memory.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();

const getById = id => usersRepo.getById(id);

const create = userData => usersRepo.create(userData);

const updateById = (id, newData) => usersRepo.updateById(id, newData);

const deleteById = id => {
  usersRepo.deleteById(id);
  tasksService.discharge(id);
};

module.exports = { getAll, getById, create, updateById, deleteById };
