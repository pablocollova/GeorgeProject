const express = require('express');
const router = express.Router();
const projekteController = require('../controllers/projekte.controller.js');
console.log("routes "  ) ;   
// Crear un nuevo registro en projekte
router.post("/", projekteController.create);

// Obtener todos los registros de Kontakte
router.get('/', projekteController.getAll);

// ... otras rutas CRUD

module.exports = router;