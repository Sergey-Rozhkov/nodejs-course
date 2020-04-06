const boards = require('../../mocks/boards.fixture');
const Board = require('./board.model');

const getAll = () => boards;

const getById = id => boards.find(board => board.id === id);

const create = boardData => {
  const newBoard = new Board(boardData);
  boards.push(newBoard);

  return newBoard;
};

const updateById = (id, newData) => {
  const updatedBoardIndex = boards.findIndex(board => board.id === id);
  boards[updatedBoardIndex] = { ...boards[updatedBoardIndex], ...newData };

  return boards[updatedBoardIndex];
};

const deleteById = id => {
  const deletedBoardIndex = boards.findIndex(board => board.id === id);

  return boards.splice(deletedBoardIndex, 1);
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
