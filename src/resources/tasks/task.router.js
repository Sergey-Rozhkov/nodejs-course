const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');

router.route('/').get((req, res) => {
  const tasks = tasksService.getAll(req.params.boardId);
  res.json(tasks);
});

router.route('/:id').get((req, res) => {
  const task = tasksService.getById(req.params.boardId, req.params.id);

  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

router.route('/').post((req, res) => {
  const task = tasksService.create(req.params.boardId, req.body);
  res.json(task);
});

router.route('/:id').put((req, res) => {
  const task = tasksService.update(req.params.boardId, req.params.id, req.body);
  res.json(task);
});

router.route('/:id').delete((req, res) => {
  const task = tasksService.deleteById(req.params.boardId, req.params.id);
  res.json(task);
});

module.exports = router;
