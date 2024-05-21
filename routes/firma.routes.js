const express = require('express');
const router = express.Router();
const firmaController = require('../controllers/firma.controller.js');

// Obtener todos los registros de Kontakte
router.get('/', firmaController.getAll);
router.get('/searchFbyK/:kontaktID', firmaController.getSearchFbyK);
router.put('/update/:id', firmaController.updateById);
router.post('/add', firmaController.add);

// ... otras rutas CRUD

module.exports = router;
