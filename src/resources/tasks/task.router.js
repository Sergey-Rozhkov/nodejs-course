const router = require('express').Router({ mergeParams: true });
const tasksService = require('./task.service');
const { NOT_FOUND, BAD_REQUEST, NO_CONTENT, OK } = require('http-status-codes');
const Tasks = require('./task.model');
const { ClientError } = require('../../common/error-classes');
const { catchErrors } = require('../../common/catch-errors');

router.route('/').get(
  catchErrors(async (req, res) => {
    const boardId = req.params.boardId;
    const tasks = await tasksService.getByBoardId(boardId);

    if (!tasks) {
      throw new ClientError(NOT_FOUND);
    }

    await res.status(OK).json(tasks.map(Tasks.toResponse));
  })
);

router.route('/:taskId').get(
  catchErrors(async (req, res) => {
    const { taskId } = req.params;
    const task = await tasksService.getById(taskId);

    if (task) {
      await res.status(OK).json(Tasks.toResponse(task));
    } else {
      res.status(NOT_FOUND).send('Task not found');
    }

    // if (!task) {
    //   throw new ClientError(NOT_FOUND);
    // }
    //
    // await res.status(OK).json(Tasks.toResponse(task));
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const boardId = req.params.boardId;
    const { title, order, description, userId, columnId } = req.body;

    if (!title || typeof order !== 'number' || !description) {
      throw new ClientError(BAD_REQUEST);
    }

    const task = await tasksService.create({
      title,
      order,
      description,
      userId,
      boardId,
      columnId
    });

    await res.status(OK).json(Tasks.toResponse(task));
  })
);

router.route('/:taskId').put(
  catchErrors(async (req, res) => {
    const taskId = req.params.taskId;
    const { boardId, title, order, description, userId, columnId } = req.body;

    if (!boardId && !title && !order && !description && !userId && !columnId) {
      throw new ClientError(BAD_REQUEST);
    }

    const updatedTask = await tasksService.updateById({
      id: taskId,
      boardId,
      title,
      order,
      description,
      userId,
      columnId
    });

    console.log('>>> updatedTask', updatedTask);

    if (!updatedTask) {
      throw new ClientError(NOT_FOUND);
    }

    await res.status(OK).json(updatedTask);
  })
);

router.route('/:taskId').delete(
  catchErrors(async (req, res) => {
    const taskId = req.params.taskId;
    const isDeleted = await tasksService.deleteById(taskId);
    if (!isDeleted) {
      throw new ClientError(NOT_FOUND);
    }
    await res.status(NO_CONTENT).send('Task was removed');
  })
);

module.exports = router;
