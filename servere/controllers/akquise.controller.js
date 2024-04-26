// akquise.controller.js
const AkquiseModel = require('../models/akquise.model.js'); // Asegúrate de que el nombre del archivo sea correcto.
console.log("cotroller"  ) ;   
// Crear y guardar un nuevo akquise
exports.create = (req, res) => {
  // Validar solicitud
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacío"
    });
    return; // Asegúrate de retornar después de enviar la respuesta para no continuar con la ejecución.
  }

  // Crear un Akquise
 const akquise = new AkquiseModel({
    Abteilung: req.body.Abteilung,
    Adressblock: req.body.Adressblock,
    // ... otros campos
  });

  // Guardar Kontakte en la base de datos
  KontakteModel.create(kontakte, (err, data) => {
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
  KontakteModel.getAll((error, kontakte) => {
    if (error) {
      res.status(500).send({
        message: 'Error al obtener los kontakte: ' + error.message
      });
    } else {
      res.send(kontakte);
    }
  });
};

// ... otros controladores CRUD
