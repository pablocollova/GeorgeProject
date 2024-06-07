  // Projekte.controller.js
  const ProjekteModel = require('../models/projekte.model.js'); // Asegúrate de que el nombre del archivo sea correcto.
 
  // Crear y guardar un nuevo Projekte
  exports.add = (req, res) => {
    // Validar solicitud
    if (!req.body) {
      res.status(400).send({
        message: "El contenido no puede estar vacío"
      });
      return; // Asegúrate de retornar después de enviar la respuesta para no continuar con la ejecución.
    }

    // Crear un Projekte
  const projekte = new ProjekteModel({
    Erstellt_von: req.body.erstellt_von,
    Erstellt_am : req.body.erstellt_am,
    Beschreibung : req.body.beschreibung,
    Projektname:req.body.projektname,
    Status :req.body.Status,
    Beginn:req.body.beginn,
    Verantwortlicher:req.body.verantwortlicher,
    Projektkürzel:req.body.projektkürzel,
    });

    // Guardar Projekte en la base de datos
    ProjekteModel.add(projekte, (err, data) => {
      console.log("controller add://",projekte);
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


  //Obtener los teamlider
  exports.getTeammitglieder = (req, res) => {
    ProjekteModel.getTeammitglieder((error, teamlider) => {
      if (error) {
        res.status(500).send({
          message: 'Error al obtener los projekte: ' + error.message
        });
      } else {
        res.send(teamlider);
      }
    });
  };

  //Obtener search
  exports.getSearch = (req, res) => {
    const searchText = req.query.texto; // Obtén el texto de búsqueda de la consulta
  ProjekteModel.getSearch(searchText,(error, result) => {
    if (error) {
              console.error('Error al buscar:', error);
              res.status(500).json({ error: 'Error al buscar en la base de datos' });
          } else {
              // Envía los resultados de la búsqueda como respuesta al cliente
              res.send(result);
          }
      });
  };

  exports.getSearchID = (req, res) => {
    const searchText = req.query.texto; // Obtén el texto de búsqueda de la consulta
  ProjekteModel.getSearchID(searchText,(error, result) => {
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
    // Obtener el ID del proyecto de los parámetros de la ruta
    const projectId = req.params.id;
    ProjekteModel.updateById(projectId, req.body, function(err, result) {
      if (err) {
        res.status(500).send({
          message: 'Error al actualizar el proyecto'
        });
      } else {
        res.send(result);
      }
    });

    // Luego puedes usar este ID para buscar y actualizar el proyecto en la base de datos
    // ... lógica para actualizar el proyecto ...

  };
  
