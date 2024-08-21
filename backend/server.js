//Configurar o Servidor Express

const express = require('express');
const sequelize = require('./db');
const User = require('./models/User');
const School = require('./models/School');
const Rating = require('./models/Rating');

const app = express();
app.use(express.json());

// Importar rotas
const authRoutes = require('./routes/authRoutes');
const schoolRoutes = require('./routes/schoolRoutes');
const ratingRoutes = require('./routes/ratingRoutes');

// Usar rotas
app.use('/api/auth', authRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/ratings', ratingRoutes);

// Sincronizar modelos e iniciar servidor
//sequelize.sync({ force: true}).then(() => {
// });

  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
    // console.log('Banco de dados sicronizado');
  });