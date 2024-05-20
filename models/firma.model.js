
    // firma.model.js
const sql = require('../config/db.js');

// Constructor del objeto Firma
const Firma = function(firma) {
  this.firmaId = mitarbeiter.Adresse_1_Typ;
  this.firma = mitarbeiter.Adresse_2_Typ;
  this.detailbeschreibung = mitarbeiter.Ort_1;
};

// Método para obtener todos los registros de Mitarbeiter
firma.getAll = result => {
  sql.query('SELECT * FROM Firma;', (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(null, err);
      return;
    }
    console.log("Firma: ", res);
    result(null, res);
  });
};

// Método para crear un nuevo registro en la tabla Firma
Firma.create = (newFirma, result) => {
  sql.query("INSERT INTO Firma SET ?", newFirma, (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(err, null);
      return;
    }
    console.log("Firma creado: ", { id: res.insertId, ...newFirma });
    result(null, { id: res.insertId, ...newFirma });
  });
};

// ... otros métodos CRUD

module.exports = Firma;
