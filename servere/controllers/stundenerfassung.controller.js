
// stundenerfassung.controller.js
const StundenerfassungModel = require('../models/stundenerfassung.model.js'); // Asegúrate de que el nombre del archivo sea correcto.

// Crear y guardar un nuevo Stundenerfassung
exports.create = (req, res) => {
  // Validar solicitud
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacío"
    });
    return; // Asegúrate de retornar después de enviar la respuesta para no continuar con la ejecución.
  }

  // Crear un Stundenerfassung
 const stundenerfassung = new StundenerfassungModel({
    Abteilung: req.body.Abteilung,
    Adressblock: req.body.Adressblock,
    // ... otros campos
  });

  // Guardar Stundenerfassung en la base de datos
  StundenerfassungModel.create(stundenerfassung, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el registro en Stundenerfassung."
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener todos los Stundenerfassung
exports.getAll = (req, res) => {
  StundenerfassungModel.getAll((error, stundenerfassung) => {
    if (error) {
      res.status(500).send({
        message: 'Error al obtener los stundenerfassung: ' + error.message
      });
    } else {
      res.send(stundenerfassung);
    }
  });
};

// ... otros controladores CRUD
