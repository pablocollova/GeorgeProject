const express = require('express');
const router = express.Router();
const aufgabenController = require('../controllers/aufgaben.controller.js');

// Crear un nuevo registro en Kontakte
router.post("/", aufgabenController.create);

// Obtener todos los registros de Kontakte
router.get('/', aufgabenController.getAll);

// ... otras rutas CRUD

module.exports = router;