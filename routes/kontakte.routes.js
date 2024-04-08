// kontakte.routes.js
const express = require('express');
const router = express.Router();
const kontakte = require('../controllers/kontakte.controller.js');

// Crear un nuevo registro en Kontakte
router.post("/", kontakte.create);

// ... otras rutas CRUD

module.exports = router;
