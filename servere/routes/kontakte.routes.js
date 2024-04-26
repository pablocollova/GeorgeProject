/*// kontakte.routes.js
const express = require('express');
const router = express.Router();
const kontakte = require('../controllers/kontakte.controller.js');

// Crear un nuevo registro en Kontakte
router.post("/", kontakte.create);


router.get('/api/kontakte', kontakteController.getAllKontakte);

// ... otras rutas CRUD

module.exports = router;*/
// kontakte.routes.js
const express = require('express');
const router = express.Router();
const kontakteController = require('../controllers/kontakte.controller.js');
console.log("routes "  ) ;   
// Crear un nuevo registro en Kontakte
router.post("/", kontakteController.create);

// Obtener todos los registros de Kontakte
router.get('/', kontakteController.getAll);

// ... otras rutas CRUD

module.exports = router;