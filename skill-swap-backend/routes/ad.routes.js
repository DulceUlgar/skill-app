const express = require('express');
const router = express.Router();
const adController = require('../controllers/ad.controller');

router.get('/ads', adController.getAllAds);
router.post('/ads', adController.createAd);
// Agrega más rutas relacionadas con anuncios

module.exports = router;
