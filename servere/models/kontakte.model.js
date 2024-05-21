// kontakte.model.js
const sql = require('../config/db.js');

// Constructor del objeto Kontakte
const Kontakte = function(kontakte) {
  this.Abteilung = kontakte.Abteilung;
  this.Adressblock = kontakte.Adressblock;
  this.Ähnlicher_Firmenschlüssel = kontakte.Ähnlicher_Firmenschlüssel;
  this.Ähnlicher_Namensschlüssel = kontakte.Ähnlicher_Namensschlüssel;
  this.Ähnlichkeit_nach = kontakte.Ähnlichkeit_nach;
  this.ÄhnlichkeitsMultiKey = kontakte.ÄhnlichkeitsMultiKey;
  this.Ähnlichkeitsschlüssel = kontakte.Ähnlichkeitsschlüssel;
  this.ÄhnlichkeitsTabEtikett = kontakte.ÄhnlichkeitsTabEtikett;
  this.Ähnlichkeitszählung = kontakte.Ähnlichkeitszählung;
  this.Anrede = kontakte.Anrede;
  this.Auswahlliste = kontakte.Auswahlliste;
  this.Bild = kontakte.Bild;
  this.Email_1 = kontakte.Email_1;
  this.Email_2 = kontakte.Email_2;
  this.EmailAdresse_mit_Name = kontakte.EmailAdresse_mit_Name;
  this.Erstellt_von = kontakte.Erstellt_von;
  this.Fax = kontakte.Fax;
  this.Firma = kontakte.Firma;
  this.Hinweise = kontakte.Hinweise;
  this.Kontaktblock_Firma_Name_Vorname = kontakte.Kontaktblock_Firma_Name_Vorname;
  this.Kontaktblock_klein = kontakte.Kontaktblock_klein;
  this.Kontaktblock_Name_Vorname = kontakte.Kontaktblock_Name_Vorname;
  this.KontaktID = kontakte.KontaktID;
  this.Kunde = kontakte.Kunde;
  this.Land = kontakte.Land;
  this.Land_1 = kontakte.Land_1;
  this.Land_2 = kontakte.Land_2;
  this.Mobil_1 = kontakte.Mobil_1;
  this.Nachname = kontakte.Nachname;
  this.Name = kontakte.Name;
  this.Ort_1 = kontakte.Ort_1;
  this.Ort_2 = kontakte.Ort_2;
  this.Postfach = kontakte.Postfach;
  this.Postleitzahl_1 = kontakte.Postleitzahl_1;
  this.Postleitzahl_2 = kontakte.Postleitzahl_2;
  this.Privat_Mobil = kontakte.Privat_Mobil;
  this.Privat_Telefon = kontakte.Privat_Telefon;
  this.Pstatus_ak = kontakte.Pstatus_ak;
  this.Pstatus_an = kontakte.Pstatus_an;
  this.Pstatus_pr = kontakte.Pstatus_pr;
  this.Straße_1 = kontakte.Straße_1;
  this.Straße_2 = kontakte.Straße_2;
  this.Telefon_1 = kontakte.Telefon_1;
  this.Telefonblock = kontakte.Telefonblock;
  this.Temp_Daten = kontakte.Temp_Daten;
  this.test = kontakte.test;
  this.Titel = kontakte.Titel;
  this.Typ = kontakte.Typ;
  this.Verantwortlicher = kontakte.Verantwortlicher;
  this.Vorname = kontakte.Vorname;
  this.Vorschau = kontakte.Vorschau;
  this.Webadresse = kontakte.Webadresse;
};

// Método para obtener todos los registros de Kontakte
Kontakte.getAll = function(callback) {
  sql.query('SELECT * FROM Kontakte;', function(error, results, fields) {
    
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

// Método para crear un nuevo registro en la tabla Kontakte
Kontakte.create = (newKontakte, result) => {
  sql.query("INSERT INTO kontakte SET ?", newKontakte, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Kontakte creado: ", { id: res.insertId, ...newKontakte });
      result(null, { id: res.insertId, ...newKontakte });
    }
  });
};

// ... otros métodos CRUD

module.exports = Kontakte;

// Aquí puedes añadir los métodos para operaciones CRUD, como getAll y create, que ya hemos discutido.

module.exports = Kontakte;
