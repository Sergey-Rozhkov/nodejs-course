const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get((req, res) => {
  const users = usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get((req, res) => {
  const reqUser = usersService.getById(req.params.id);
  if (reqUser) {
    res.json(User.toResponse(reqUser));
  } else {
    res.status(404).send('User not found');
  }
});

router.route('/').post((req, res) => {
  const newUser = usersService.create(req.body);
  res.type('json');
  res.json(User.toResponse(newUser));
});

router.route('/:id').put((req, res) => {
  const editedUser = usersService.updateById(req.params.id, req.body);
  res.type('json');
  res.json(User.toResponse(editedUser));
});

router.route('/:id').delete((req, res) => {
  usersService.deleteById(req.params.id);
  res.type('json');
  res.status(204).send();
});

module.exports = router;
