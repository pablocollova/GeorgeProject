const express = require('express');
const router = express.Router();
const leistungsphasenController = require('../controllers/leistungsphasen.controller.js');
// Ruta para obtener una fase de desempeño por ID de proyecto
router.get('/:projektId', leistungsphasenController.findByProjektId);

// Ruta para actualizar una fase de desempeño por ID
router.put('/:id', leistungsphasenController.update);

module.exports = router;
module.exports = router;
