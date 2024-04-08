// kontakte.controller.js
const Kontakte = require('../models/kontakte.model.js');

// Crear y guardar un nuevo Kontakte
exports.create = (req, res) => {
  // Validar solicitud
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacío"
    });
  }

  // Crear un Kontakte
  const kontakte = new Kontakte({
    Abteilung: req.body.Abteilung,
    Adressblock: req.body.Adressblock,
    // ... otros campos
  });

  // Guardar Kontakte en la base de datos
  Kontakte.create(kontakte, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocurrió un error al crear el registro en Kontakte."
      });
    else res.send(data);
  });
};

// ... otros controladores CRUD
