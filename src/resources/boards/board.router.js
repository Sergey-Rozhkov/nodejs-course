const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
const taskRouter = require('../tasks/task.router');
const { catchError } = require('../../common/catch-error');

router.route('/').get(
  catchError(async (req, res) => {
    const boards = await boardsService.getAll();
    res.status(200).json(boards.map(Board.toResponse));
  })
);

router.route('/:id').get(
  catchError(async (req, res) => {
    const board = await boardsService.getById(req.params.id);
    if (board) {
      res.status(200).json(Board.toResponse(board));
    } else {
      res.status(404).send('Board not found');
    }
  })
);

router.route('/').post(
  catchError(async (req, res) => {
    const board = await boardsService.create(req.body);
    res.status(200).json(Board.toResponse(board));
  })
);

router.route('/:id').put(
  catchError(async (req, res) => {
    // const board = await boardsService.updateById(req.params.id, req.body);
    const board = await boardsService.updateById({
      ...req.body,
      id: req.params.id
    });
    if (board) {
      res.status(200).json(Board.toResponse(board));
    } else {
      const err = new Error('Board not found');
      err.status = 404;
      throw err;
    }
  })
);

router.route('/:id').delete(
  catchError(async (req, res) => {
    await boardsService.deleteById(req.params.id);
    res.status(204).json();
  })
);

router.use('/:boardId/tasks', taskRouter);

module.exports = router;
