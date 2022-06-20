const express = require('express');
const {
  getAdminPage, deleteUser, createUser, updateLeague
} = require('../controllers/users');

const User = require('../models/user');

const router = express.Router({ mergeParams: true });

// const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);
router.use(authorize('admin'));

router.get('/', getAdminPage);
router.post('/', createUser);
router.delete('/users/:id', deleteUser);
router.put('/:leagueId', updateLeague);


module.exports = router;  