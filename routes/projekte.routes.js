const express = require('express');
const router = express.Router();
const projekteController = require('../controllers/projekte.controller.js');
console.log("routes "  ) ;   
// Crear un nuevo registro en projekte
router.post("/", projekteController.create);

// Obtener todos los registros de Kontakte
router.get('/all', projekteController.getAll);

//Obtener los teamlider
router.get('/teammitglieder', projekteController.getTeammitglieder);

router.get('/search', projekteController.getSearch);

// ... otras rutas CRUD

module.exports = router;
