//firma.controller.js
const FirmaModel = require('../models/firma.model.js');
exports.add = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacío"
    });
    return; 
}

  // Crear un Firma
 const firma = new FirmaModel({
  id: req.body.firmaId,
  Vorname : req.body.firma,
  Nachname : req.body.detailbeschreibung,
  
  });

  // Guardar Firma en la base de datos
  firmaModel.add(firma, (err, data) => {
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
  FirmaModel.getAll((error, firma) => {
    if (error) {
      res.status(500).send({
        message: 'Error al obtener los kontakte: ' + error.message
      });
    } else {
      res.send(firma);
    }
  });
};
  //Obtener search
  exports.getSearch = (req, res) => {
    const searchText = req.query.texto; // Obtén el texto de búsqueda de la consulta
  FirmaModel.getSearchFbyK(searchText,(error, result) => {
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
    const firmaId = req.body.firmaId;
    firmaModel.updateById(firmaId, req.body, function(err, result) {
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
