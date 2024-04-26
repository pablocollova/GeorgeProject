const express = require('express');
const router = express.Router();
const stundenerfassungController = require('../controllers/stundenerfassung.controller.js');
console.log("routes "  ) ;   
// Crear un nuevo registro en Stundenerfassung
router.post("/", stundenerfassungController.create);

// Obtener todos los registros de Stundenerfassung
router.get('/', stundenerfassungController.getAll);

// ... otras rutas CRUD

module.exports = router;