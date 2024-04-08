// kontakte.model.js
const sql = require('../config/db.config.js');

// Constructor del objeto Kontakte
const Kontakte = function(kontakte) {
  this.Abteilung = kontakte.Abteilung;
  this.Adressblock = kontakte.Adressblock;
  // ... otros campos
};

// Método para crear un nuevo registro en la tabla Kontakte
Kontakte.create = (newKontakte, result) => {
  sql.query("INSERT INTO Kontakte SET ?", newKontakte, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Kontakte creado: ", { id: res.insertId, ...newKontakte });
    result(null, { id: res.insertId, ...newKontakte });
  });
};

// ... otros métodos CRUD

module.exports = Kontakte;
