
// kontakte.routes.js
const express = require('express');
const router = express.Router();
const kontakteController = require('../controllers/kontakte.controller.js');
console.log("routes "  ) ;   

// Obtener todos los registros de Kontakte
router.get('/', kontakteController.getAll);
router.get('/search',kontakteController.getSearch);
router.put('/update/:id',kontakteController.updateById);
router.post('/add', kontakteController.add);

// ... otras rutas CRUD

module.exports = router;