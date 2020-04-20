const usersRepo = require('./user.repository');
const User = require('./user.model');
const tasksService = require('../tasks/task.service');

const create = (name, login, password) => {
  const user = new User({ name, login, password });
  return usersRepo.create(user);
};
const getById = id => usersRepo.getById(id);
const updateById = data => usersRepo.updateById(data);
const deleteById = async id => {
  const { deletedCount } = await usersRepo.deleteById(id);

  if (deletedCount > 0) {
    await tasksService.unassignByUserId(id);
  }

  return deletedCount;
};
const getAll = () => usersRepo.getAll();

module.exports = {
  create,
  getById,
  updateById,
  deleteById,
  getAll
};
