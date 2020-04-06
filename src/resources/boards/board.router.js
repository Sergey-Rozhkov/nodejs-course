const router = require('express').Router();
const boardsService = require('./board.service');
const taskRouter = require('../tasks/task.router');

router.route('/').get((req, res) => {
  const boards = boardsService.getAll();
  res.json(boards);
});

router.route('/:id').get((req, res) => {
  const board = boardsService.getById(req.params.id);
  if (board) {
    res.json(board);
  } else {
    res.status(404).send('Board not found');
  }
});

router.route('/').post((req, res) => {
  const board = boardsService.create(req.body);
  res.json(board);
});

router.route('/:id').put((req, res) => {
  const board = boardsService.updateById(req.params.id, req.body);
  res.json(board);
});

router.route('/:id').delete((req, res) => {
  const board = boardsService.deleteById(req.params.id);
  res.json(board);
});

router.use('/:boardId/tasks', taskRouter);

module.exports = router;
