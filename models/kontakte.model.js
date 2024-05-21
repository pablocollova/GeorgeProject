// kontakte.model.js
const sql = require('../config/db.js');
console.log("model"  ) ;   
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
console.log(sql) ;
// Método para obtener todos los registros de Kontakte
Kontakte.getAll = function(callback) {
  sql.query('SELECT KontaktID, Anrede,Nachname, Vorname, Telefon_1, Mobil_1, Email_1, Webadresse, Abteilung, Typ, Kunde, Verantwortlicher, Privat_telefon, Privat_mobil, Email_2 FROM Kontakte;', function(error, results, fields) {

    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

Kontakte.getSearch = (searchText, callback) => { 
  console.log("model getSearch: ",searchText);
  // Lista de campos en los que deseas buscar
 const campos = ['KontaktID', 'Anrede', 'Vorname', 'Telefon_1', 'Mobil_1', 'Email_1', 'Webadresse', 'Erstellt_von' ]; // Agrega aquí los nombres de los campos relevantes
 // Construir la parte de la consulta SQL para buscar en todos los campos
 const whereClause = campos.map(campo => `${campo} LIKE ?`).join(' OR ');
 // Consulta SQL para buscar registros que contengan el texto de búsqueda en cualquiera de los campos relevantes
 const query = `SELECT KontaktID, Anrede, Vorname, Telefon_1, Mobil_1, Email_1, Webadresse, Erstellt_von FROM Kontakte WHERE ${whereClause}`;
   // Array de valores para reemplazar en la consulta SQL
 const values = campos.map(() => `%${searchText}%`);
   // Ejecutar la consulta SQL
 sql.query(query, values, (error, resultados) => {
     if (error) {
         console.error('Error al buscar:', error);
         callback(error, null);
     } else {
         // Envía los resultados de la búsqueda como respuesta al cliente
         callback(null, resultados);
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

Kontakte.add = (dato, result) => {
  const query = `
    INSERT INTO Kontakte (
      Anrede, Vorname, Telefon_1, Mobil_1, Email_1, Webadresse, Abteilung, Typ
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
  `;/*, Kunde, Verantwortlicher, Privat_telefon, Privat_mobil, Email_2*/
  const values = [
    dato.anrede,
    dato.vorname,
    dato.telefono_1,
    dato.mobil_1,
    dato.email_1,
    dato.webadresse,
    dato.abteilung,
    dato.typ   
  ];
  
  sql.query(query, values, (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(err, null);
      return;
    }
    console.log("Registro creado: ", { id: res.insertId, ...dato });
    result(null, { id: res.insertId, ...dato });
  });
};


Kontakte.updateById = (id, kontakte, result) => {console.log(id, kontakte );
  sql.query("UPDATE Kontakte SET Anrede = ?,Nachname=?, Vorname = ?, Telefon_1 = ?, Email_1 = ?, Webadresse = ?, Abteilung = ?, Typ = ? WHERE KontaktID = ?",
    [kontakte.anrede, kontakte.nachname,  kontakte.vorname, kontakte.telefon, kontakte.email, kontakte.webadress, kontakte.abteilung, kontakte.typ,id],
    (err, res) => {
      if (err) {
        console.error("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // No se encontró el registro con el id especificado
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("Registro actualizado: ", { id: id, ...kontakte });
      result(null, { id: id, ...kontakte });
    }
  );
};

// ... otros métodos CRUD

module.exports = Kontakte;

