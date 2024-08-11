// server/routes/userRoutes.js
const express = require('express');
const { registerUser, getAllUsers, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.post('/api/users', registerUser);
router.get('/api/users', getAllUsers);
router.delete('/api/users/:id', deleteUser);

module.exports = router;
