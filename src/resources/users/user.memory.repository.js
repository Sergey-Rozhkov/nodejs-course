const { users } = require('../../mocks/users.fixture');
const User = require('./user.model');

const getAll = () => {
  return users;
};

const getById = id => {
  return users.find(user => user.id === id);
};

const create = userData => {
  const newUser = new User(userData);
  users.push(newUser);

  return newUser;
};

const updateById = (id, newData) => {
  const editedUserIndex = users.findIndex(user => user.id === id);
  users[editedUserIndex] = { ...users[editedUserIndex], ...newData };

  return users[editedUserIndex];
};

const deleteById = id => {
  const deletedUserIndex = users.findIndex(user => user.id === id);

  return users.splice(deletedUserIndex, 1);
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
