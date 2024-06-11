const express = require('express');
const router = express.Router();
const projekteController = require('../controllers/projekte.controller.js');

// Obtener todos los registros de Kontakte
router.get('/', projekteController.getAll);

//Obtener los teamlider
router.get('/teammitglieder', projekteController.getTeammitglieder);
router.get('/search', projekteController.getSearch);
router.get('/searchID/:id', projekteController.getSearchID);    
router.put('/update/:id', projekteController.updateById);
router.post('/add', projekteController.add);

// ... otras rutas CRUD

module.exports = router;
