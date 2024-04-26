// rechnungen.routes.js

const express = require('express');
const router = express.Router();
const rechnungenController = require('../controllers/rechnungen.controller.js');
console.log("routes "  ) ;   
// Crear un nuevo registro en Rechnungen
router.post("/", rechnungenController.create);

// Obtener todos los registros de Rechnungen
router.get('/', rechnungenController.getAll);

// ... otras rutas CRUD

module.exports = router;