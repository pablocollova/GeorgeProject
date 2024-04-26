// mitarbeiter.controller.js
const Mitarbeiter = require('../models/mitarbeiter.model.js'); // Asegúrate de que el nombre del archivo sea correcto.
console.log("cotroller"  ) ;   
// Crear y guardar un nuevo mitarbeiter
exports.create = (req, res) => {
  // Validar solicitud
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacío"
    });
    return; // Asegúrate de retornar después de enviar la respuesta para no continuar con la ejecución.
  }

  // Crear un Kontakte
 const mitarbeiter = new MitarbeiterModel({
    Abteilung: req.body.Abteilung,
    Adressblock: req.body.Adressblock,
    // ... otros campos
  });

  // Guardar itarbeiter en la base de datos
  MitarbeiterModel.create(mitarbeiter, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el registro en Kontakte."
      });
    } else {
      res.send(data);
    }
  });
};

// Obtener todos los Kontakte
exports.getAll = (req, res) => {
  MitarbeiterModel.getAll((error, mitarbeiter) => {
    if (error) {
      res.status(500).send({
        message: 'Error al obtener los mitarbeiter: ' + error.message
      });
    } else {
      res.send(mitarbeiter);
    }
  });
};

// ... otros controladores CRUD
