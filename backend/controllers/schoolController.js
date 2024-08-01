//Controlador de Escola

const School = require('../models/School');

exports.getAllSchools = async (req, res) => {
  try {
    const schools = await School.findAll();
    res.json(schools);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSchool = async (req, res) => {
  try {
    const { nome, endereco, mensalidade, latitude, longitude } = req.body;
    const school = await School.create({ nome, endereco, mensalidade, latitude, longitude });
    res.status(201).json(school);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
