const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.get('/getUserByEmail', usersController.getUserByEmail);
router.post('/', usersController.createUser);
router.get('/', usersController.index);
router.delete('/:id', usersController.removeUser);

module.exports = router;
