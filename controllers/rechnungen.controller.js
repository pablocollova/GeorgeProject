// rechnungen .controller.js
// rechnungen.controller.js
const RechnungenModel = require('../models/rechnungen.model.js'); // Asegúrate de que el nombre del archivo sea correcto.

// Crear y guardar un nuevo Rechnungen
exports.create = (req, res) => {
  // Validar solicitud
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacío"
    });
    return; // Asegúrate de retornar después de enviar la respuesta para no continuar con la ejecución.
  }

  // Crear un Rechnungen
 const rechnungen = new RechnungenModel({
    Abteilung: req.body.Abteilung,
    Adressblock: req.body.Adressblock,
    // ... otros campos
  });

  // Guardar Rechnungen en la base de datos
  RechnungenModel.create(rechnungen, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el registro en Rechnungen."
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener todos los Rechnungen
exports.getAll = (req, res) => {
  RechnungenModel.getAll((error, rechnungen) => {
    if (error) {
      res.status(500).send({
        message: 'Error al obtener los rechnungen: ' + error.message
      });
    } else {
      res.send(rechnungen);
    }
  });
};

// ... otros controladores CRUD
