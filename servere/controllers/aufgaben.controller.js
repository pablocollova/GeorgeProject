// kontakte.controller.js
const AufgabenModel = require('../models/aufgaben.model.js'); // Asegúrate de que el nombre del archivo sea correcto.
console.log("cotroller"  ) ;   
// Crear y guardar un nuevo Aufgaben
exports.create = (req, res) => {
  // Validar solicitud
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacío"
    });
    return; // Asegúrate de retornar después de enviar la respuesta para no continuar con la ejecución.
  }

  // Crear un Aufgaben
 const kontakte = new AufgabenModel({
    Abteilung: req.body.Abteilung,
    Adressblock: req.body.Adressblock,
    // ... otros campos
  });

  // Guardar Kontakte en la base de datos
  AufgabenModel.create(aufgaben, (err, data) => {
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
  AufgabenModel.getAll((error, aufgaben) => {
    if (error) {
      res.status(500).send({
        message: 'Error al obtener los kontakte: ' + error.message
      });
    } else {
      res.send(aufgaben);
    }
  });
};

// ... otros controladores CRUD
