// Projekte.controller.js
const ProjekteModel = require('../models/projekte.model.js'); // Asegúrate de que el nombre del archivo sea correcto.

// Crear y guardar un nuevo Projekte
exports.create = (req, res) => {
  // Validar solicitud
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacío"
    });
    return; // Asegúrate de retornar después de enviar la respuesta para no continuar con la ejecución.
  }

  // Crear un Projekte
 const kontakte = new ProjekteModel({
    Abteilung: req.body.Abteilung,
    Adressblock: req.body.Adressblock,
    // ... otros campos
  });

  // Guardar Projekte en la base de datos
  ProjekteModel.create(kontakte, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el registro en Projekte."
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener todos los Projekte
exports.getAll = (req, res) => {
  ProjekteModel.getAll((error, projekte) => {
    if (error) {
      res.status(500).send({
        message: 'Error al obtener los projekte: ' + error.message
      });
    } else {
      res.send(projekte);
    }
  });
};

// ... otros controladores CRUD
