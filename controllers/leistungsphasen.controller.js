const Leistungsphasen = require('../models/leistungsphasen.model.js');

// Obtener una fase de desempeño por ID de proyecto
exports.findByProjektId = (req, res) => {
  const projektId = req.params.projektId;

  Leistungsphasen.getByProjektId(projektId, (err, data) => {
    if (err) {
      res.status(500).send({
        message: "Error retrieving Leistungsphase with ProjektID " + projektId
      });
    } else {
      // Devolver una lista vacía si no se encuentran registros
      if (!data) {
        data = [];
      }
      res.send(data);
    }
  });
};

// Crear y guardar un nuevo hito
exports.create = (req, res) => {
  // Validar la solicitud
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Crear un nuevo hito
  const leistungsphasen = new Leistungsphasen({
    Erstellt_von: 'User', // Este debería ser el usuario actual
    Erstellt_am: new Date(),
    Geaendert_am: new Date(),
    Beschreibung: req.body.beschreibung,
    Faelligkeit: req.body.faelligkeit,
    Verantwortlicher: req.body.verantwortlicher,
    Projektname: req.body.projektname,
    ProjektID: req.body.projektId // Asegúrate de que este campo está presente
    // Agregar más campos según sea necesario
  });

  // Guardar el hito en la base de datos
  Leistungsphasen.create(leistungsphasen, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Leistungsphase."
      });
    else res.send(data);
  });
};

// Actualizar una fase de desempeño por ID
exports.update = (req, res) => {
  const id = req.params.id;

  // Validar la solicitud
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Leistungsphasen.updateById(id, new Leistungsphasen(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Leistungsphase with ID ${id}.`
        });
      } else {
        res.status(500).send({
          message: "Error updating Leistungsphase with ID " + id
        });
      }
    } else res.send(data);
  });
};
