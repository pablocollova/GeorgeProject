const db = require('../config/db.js');

const Leistungsphasen = function(leistungsphasen) {
  this.Erstellt_von = leistungsphasen.Erstellt_von;
  this.Erstellt_am = leistungsphasen.Erstellt_am;
  this.Geaendert_am = leistungsphasen.Geaendert_am;
  this.Beschreibung = leistungsphasen.Beschreibung;
  this.Faelligkeit = leistungsphasen.Faelligkeit;
  this.Verantwortlicher = leistungsphasen.Verantwortlicher;
  this.ProjektID = leistungsphasen.ProjektID;
  this.Projektname = leistungsphasen.Projektname;
  // Añadir más campos según sea necesario
};

Leistungsphasen.getByProjektId = (projektId, result) => {
  db.query("SELECT * FROM Leistungsphasen WHERE ProjektID = ?", [projektId], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found leistungsphasen: ", res);
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

Leistungsphasen.create = (newLeistungsphasen, result) => {
  db.query("INSERT INTO Leistungsphasen SET ?", newLeistungsphasen, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created leistungsphasen: ", { id: res.insertId, ...newLeistungsphasen });
    result(null, { id: res.insertId, ...newLeistungsphasen });
  });
};

Leistungsphasen.updateById = (id, leistungsphasen, result) => {
  db.query(
    "UPDATE Leistungsphasen SET ? WHERE ID = ?",
    [leistungsphasen, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated leistungsphasen: ", { id: id, ...leistungsphasen });
      result(null, { id: id, ...leistungsphasen });
    }
  );
};

module.exports = Leistungsphasen;
