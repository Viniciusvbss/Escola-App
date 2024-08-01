//Controlador de Classificação

const Rating = require('../models/Rating');

exports.createRating = async (req, res) => {
  try {
    const { usuario_id, escola_id, estrelas, comentario } = req.body;
    const rating = await Rating.create({ usuario_id, escola_id, estrelas, comentario });
    res.status(201).json(rating);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getRatingsBySchool = async (req, res) => {
  try {
    const { id } = req.params;
    const ratings = await Rating.findAll({ where: { escola_id: id } });
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
