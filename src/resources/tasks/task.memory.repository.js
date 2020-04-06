let tasks = require('../../mocks/tasks.fixture');
const Task = require('./task.model');

const getAll = () => tasks;

const getById = (boardId, taskId) =>
  tasks.find(task => task.boardId === boardId && task.id === taskId);

const create = (boardId, taskData) => {
  const newTask = new Task({ ...taskData, boardId });
  tasks.push(newTask);

  return newTask;
};

const updateById = (boardId, taskId, newData) => {
  const updatedTaskIndex = tasks.findIndex(
    task => task.boardId === boardId && task.id === taskId
  );
  tasks[updatedTaskIndex] = { ...tasks[updatedTaskIndex], ...newData };

  return tasks[updatedTaskIndex];
};

const deleteById = (boardId, taskId) => {
  const index = tasks.findIndex(
    task => task.boardId === boardId && task.id === taskId
  );
  tasks.splice(index, 1);
};

const deleteByBoardId = boardId => {
  tasks = tasks.filter(task => task.boardId !== boardId);
};

const discharge = id => {
  tasks.forEach(task => {
    if (task.userId === id) task.userId = null;
  });
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  deleteByBoardId,
  discharge
};
