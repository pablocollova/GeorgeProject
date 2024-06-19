const db = require('../config/db.config.js');

const Leistungsphasen = function(leistungsphasen) {
  this.Erstellt_von = leistungsphasen.Erstellt_von;
  this.Erstellt_am = leistungsphasen.Erstellt_am;
  this.Geaendert_am = leistungsphasen.Geaendert_am;
  this.Beschreibung = leistungsphasen.Beschreibung;
  this.Faelligkeit = leistungsphasen.Faelligkeit;
  // otros campos...
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
