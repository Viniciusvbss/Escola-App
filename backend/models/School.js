//Modelo de Escola

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const School = sequelize.define('School', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mensalidade: {
    type: DataTypes.DECIMAL,
    allowNull: true
  },
  latitude: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  longitude: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
}, {
  tableName: 'escolas',
  timestamps: false
});

module.exports = School;
