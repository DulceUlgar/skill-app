const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/profile/:id', userController.getProfile);
// Agrega más rutas relacionadas con usuarios

module.exports = router;
