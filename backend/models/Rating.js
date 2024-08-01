//Modelo de Classificação

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');
const School = require('./School');

const Rating = sequelize.define('Rating', {
  estrelas: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  comentario: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'classificacoes',
  timestamps: false
});

Rating.belongsTo(User, { foreignKey: 'usuario_id' });
Rating.belongsTo(School, { foreignKey: 'escola_id' });

module.exports = Rating;
