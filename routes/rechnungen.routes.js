// rechnungen.routes.js

const express = require('express');
const router = express.Router();
const kontakteController = require('../controllers/rechnungen.controller.js');
console.log("routes "  ) ;   
// Crear un nuevo registro en Rechnungen
router.post("/", kontakteController.create);

// Obtener todos los registros de Rechnungen
router.get('/', kontakteController.getAll);

// ... otras rutas CRUD

module.exports = router;