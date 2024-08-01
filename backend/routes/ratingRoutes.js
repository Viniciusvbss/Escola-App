//Rotas de Classificação 

const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');

router.post('/', ratingController.createRating);
router.get('/school/:id', ratingController.getRatingsBySchool);

module.exports = router;
