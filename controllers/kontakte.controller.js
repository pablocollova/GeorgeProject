// kontakte.controller.js
const KontakteModel = require('../models/kontakte.model.js'); // Asegúrate de que el nombre del archivo sea correcto.
console.log("cotroller"  ) ;   
// Crear y guardar un nuevo Kontakte
exports.add = (req, res) => {
  // Validar solicitud
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacío"
    });
    return; // Asegúrate de retornar después de enviar la respuesta para no continuar con la ejecución.
  }

  // Crear un Kontakte
 const kontakte = new KontakteModel({
  Anrede: req.body.anrede,
  Vorname : req.body.vorname,
  Nachname : req.body.nachname,
  Telefon:req.body.telefon,
  Mobil_1 :req.body.mobil,
  Email:req.body.email,
  Webadresse:req.body.webadress,
  Abteilung:req.body.abteilung,
  Typ:req.body.typ,
  });

  // Guardar Kontakte en la base de datos
  KontakteModel.add(kontakte, (err, data) => {
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
  //Obtener search
  exports.getSearch = (req, res) => {
    const searchText = req.query.texto; // Obtén el texto de búsqueda de la consulta
  KontakteModel.getSearch(searchText,(error, result) => {
    if (error) {
              console.error('Error al buscar:', error);
              res.status(500).json({ error: 'Error al buscar en la base de datos' });
          } else {
              // Envía los resultados de la búsqueda como respuesta al cliente
              res.send(result);
          }
      });
  };

  //update
  exports.updateById = function(req, res) {
    console.log("req",req.body);
    // Obtener el ID del proyecto de los parámetros de la ruta
    const kontakteId = req.body.kontakteId;
    KontakteModel.updateById(kontakteId, req.body, function(err, result) {
      if (err) {
        res.status(500).send({
          message: 'Error al actualizar el proyecto'
        });
      } else {
        res.send(result);
      }
    });
  }

// ... otros controladores CRUD
