const express = require('express');
const router = express.Router();
const mitarbeiterController = require('../controllers/mitarbeiter.controller.js');

// Crear un nuevo registro en Kontakte
router.post("/", mitarbeiterController.create);

// Obtener todos los registros de Kontakte
router.get('/', mitarbeiterController.getAll);

// ... otras rutas CRUD

module.exports = router;