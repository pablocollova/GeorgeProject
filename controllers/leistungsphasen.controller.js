const Leistungsphasen = require('../models/leistungsphasen.model.js');

// Obtener una fase de desempeño por ID de proyecto
exports.findByProjektId = (req, res) => {
  const projektId = req.params.projektId;

  Leistungsphasen.getByProjektId(projektId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Leistungsphase with ProjektID ${projektId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Leistungsphase with ProjektID " + projektId
        });
      }
    } else res.send(data);
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
