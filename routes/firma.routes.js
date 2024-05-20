const express = require('express');
const router = express.Router();
const projekteController = require('../controllers/firma.controller.js');
console.log("routes"  ) ;   
// Obtener todos los registros de Kontakte
router.get('/', firmaController.getAll);
router.get('/search', firmaController.getSearch);
router.put('/update/:id', firmaController.updateById);
router.post('/add', firmaController.add);

// ... otras rutas CRUD

module.exports = router;
