const express = require('express');
const router = express.Router();
const projekteController = require('../controllers/kontakte.controller.js');
console.log("routes "  ) ;   
// Crear un nuevo registro en Kontakte
router.post("/", projekteController.create);

// Obtener todos los registros de Kontakte
router.get('/', projekteController.getAll);

// ... otras rutas CRUD

module.exports = router;