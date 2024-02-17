// Añadiremos nuestro servidor, conexión a la base de datos y uniremos el resto de la aplicación
const express = require('express');
const router = express.Router();
const tasksRoutes = require('./tasks');

router.use('/', tasksRoutes);

module.exports = router;