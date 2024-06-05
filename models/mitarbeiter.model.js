// mitarbeiter.model.js
const sql = require('../config/db.js');

// Constructor del objeto Mitarbeiter
const Mitarbeiter = function(mitarbeiter) {
  this.Adresse_1_Typ = mitarbeiter.Adresse_1_Typ;
  this.Adresse_2_Typ = mitarbeiter.Adresse_2_Typ;
  this.Ort_1 = mitarbeiter.Ort_1;
  this.Ort_2 = mitarbeiter.Ort_2;
  this.Firma = mitarbeiter.Firma;
  this.Kontaktnr = mitarbeiter.Kontaktnr;
  this.Erstellt_von = mitarbeiter.Erstellt_von;
  this.Email = mitarbeiter.Email;
  this.EmailAdresse_mit_Name = mitarbeiter.EmailAdresse_mit_Name; // Calculated field, formula needed
  this.Vorname = mitarbeiter.Vorname;
  this.Bild = mitarbeiter.Bild;
  this.Nachname = mitarbeiter.Nachname;
  this.Hinweise = mitarbeiter.Hinweise;
  this.Telefon_1 = mitarbeiter.Telefon_1;
  this.Fax = mitarbeiter.Fax;
  this.Postleitzahl_1 = mitarbeiter.Postleitzahl_1;
  this.Postleitzahl_2 = mitarbeiter.Postleitzahl_2;
  this.Temp_Daten = mitarbeiter.Temp_Daten;
  this.Ähnlichkeit_nach = mitarbeiter.Ähnlichkeit_nach;
  this.Ähnlicher_Firmenschlüssel = mitarbeiter.Ähnlicher_Firmenschlüssel; // Calculated field, formula needed
  this.Ähnlicher_Namensschlüssel = mitarbeiter.Ähnlicher_Namensschlüssel; // Calculated field, formula needed
  this.Ähnlichkeitszählung = mitarbeiter.Ähnlichkeitszählung; // Calculated field, formula needed
  this.Ähnlichkeitsschlüssel = mitarbeiter.Ähnlichkeitsschlüssel; // Calculated field, formula needed
  this.ÄhnlichkeitsMultiKey = mitarbeiter.ÄhnlichkeitsMultiKey; // Calculated field, formula needed
  this.ÄhnlichkeitsTabEtikett = mitarbeiter.ÄhnlichkeitsTabEtikett; // Calculated field, formula needed
  this.Land_1 = mitarbeiter.Land_1;
  this.Land_2 = mitarbeiter.Land_2;
  this.Straße_1 = mitarbeiter.Straße_1;
  this.Straße_2 = mitarbeiter.Straße_2;
  this.Vorschau = mitarbeiter.Vorschau;
  this.Vorschau_anzeigen = mitarbeiter.Vorschau_anzeigen; // Calculated field, formula needed
  this.Anrede = mitarbeiter.Anrede;
  this.Name = mitarbeiter.Name; // Calculated field, formula needed
  this.Gruppe = mitarbeiter.Gruppe;
  this.Eins = mitarbeiter.Eins; // Calculated field, formula needed
  this.Webadresse = mitarbeiter.Webadresse;
  this.test = mitarbeiter.test;
  this.Titel = mitarbeiter.Titel;
  this.Postfach = mitarbeiter.Postfach;
  this.Typ = mitarbeiter.Typ;
  this.Auswahlliste = mitarbeiter.Auswahlliste;
  this.Kontaktblock_klein = mitarbeiter.Kontaktblock_klein; // Calculated field, formula needed
  this.Stundensatz = mitarbeiter.Stundensatz;
  this.TAZ = mitarbeiter.TAZ;
  this.Produktivität = mitarbeiter.Produktivität;
  this.Tagessoll = mitarbeiter.Tagessoll; // Calculated field, formula needed
  this.Projektleiter = mitarbeiter.Projektleiter; // Calculated field, formula needed
  this.Faktor = mitarbeiter.Faktor;
  this.Telefon_2 = mitarbeiter.Telefon_2;
  this.Mobil_1 = mitarbeiter.Mobil_1;
  this.Mobil_2 = mitarbeiter.Mobil_2;
  this.Kurzname = mitarbeiter.Kurzname;
  this.vMitarbeitername = mitarbeiter.vMitarbeitername;
  this.Stundensatz_Effektiv = mitarbeiter.Stundensatz_Effektiv; // Calculated field, formula needed
  this.Name_für_Projekte = mitarbeiter.Name_für_Projekte;
  this.Team = mitarbeiter.Team;
  this.vTeam = mitarbeiter.vTeam;
  this.Aktiv = mitarbeiter.Aktiv;
  this.DateiID = mitarbeiter.DateiID;
  this.vAktiv = mitarbeiter.vAktiv;
  this.Aktiv_JA = mitarbeiter.Aktiv_JA; // Calculated field, formula needed
};

// Método para obtener todos los registros de Mitarbeiter
Mitarbeiter.getAll = function(callback) {
  sql.query('SELECT* FROM Mitarbeiter;', function(error, results, fields) {

    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

// Método para crear un nuevo registro en la tabla Mitarbeiter
Mitarbeiter.create = (newMitarbeiter, result) => {
  sql.query("INSERT INTO Mitarbeiter SET ?", newMitarbeiter, (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(err, null);
      return;
    }
    console.log("Mitarbeiter creado: ", { id: res.insertId, ...newMitarbeiter });
    result(null, { id: res.insertId, ...newMitarbeiter });
  });
};

Mitarbeiter.searchMbyP = (projektID, callback) => {
  sql.query(`SELECT m.* FROM Mitarbeiter m
            JOIN mitarbeiterProjekte mp ON m.MitarbeiterID = mp.MitarbeeiterID
            JOIN Projekte p ON mp.MitarbeiterID = p.ProjekteID
            WHERE p.ProjekteID = ${projektID};`, (error, results) => {
    if (error) {
      console.error('Error al buscar:', error);
      callback(error, null);
    } else {
      // Envía los resultados de la búsqueda como respuesta al cliente
      callback(null, results);
    }
  });
}


module.exports = Mitarbeiter;
