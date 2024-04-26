// menu.routes.js
const express = require('express');
const router = express.Router();
const menu = require('../controllers/menu.controller.js');

// Crear un nuevo registro en Menu
router.post("/", menu.create);

// ... otras rutas CRUD

module.exports = router;
