// menu.controller.js
const Menu = require('../models/menu.model.js');

// Crear y guardar un nuevo Menu
exports.create = (req, res) => {
  // Validar solicitud
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacío"
    });
  }

  // Crear un Menu
  const menu = new Menu({
    Variable_Firmenname: req.body.Variable_Firmenname,
    // ... otros campos
  });

  // Guardar Menu en la base de datos
  Menu.create(menu, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocurrió un error al crear el registro en Menu."
      });
    else res.send(data);
  });
};

// ... otros controladores CRUD
