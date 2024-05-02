// projekte.model.js
const sql = require('../config/db.js');

// Constructor del objeto Projekte
const Projekte = function(projekte) {
  this.Erstellt_von = projekte.Erstellt_von;
  this.Erstellt_am = projekte.Erstellt_am;
  this.Geändert_am = projekte.Geändert_am;
  this.Beschreibung = projekte.Beschreibung;
  this.Variable_Projektnr = projekte.Variable_Projektnr;
  this.HiliteSortiertNach = projekte.HiliteSortiertNach;
  this.Projektname = projekte.Projektname;
  this.Eins = projekte.Eins; // Este campo es calculado, se necesita una fórmula
  this.ProjektID = projekte.ProjektID;
  this.Status = projekte.Status;
  this.Typ = projekte.Typ;
  this.Beginn = projekte.Beginn;
  this.Fälligkeit = projekte.Fälligkeit;
  this.lfdNr = projekte.lfdNr;
  this.Projektkürzel = projekte.Projektkürzel;
  this.Projektsumme_1 = projekte.Projektsumme_1; // Este campo es calculado, se necesita una fórmula
  this.Verantwortlicher = projekte.Verantwortlicher;
  this.KontaktID = projekte.KontaktID;
  this.Fremdleistungen = projekte.Fremdleistungen;
  this.Netto_Stundenkontigent = projekte.Netto_Stundenkontigent;
  this.Summe_Stunden = projekte.Summe_Stunden;
  this.Abschlag_Prozent = projekte.Abschlag_Prozent;
  this.Abschlag_Euro = projekte.Abschlag_Euro; // Este campo es calculado, se necesita una fórmula
  this.Stundenvorgaben_Netto = projekte.Stundenvorgaben_Netto; // Este campo es calculado, se necesita una fórmula
  this.Projektwert_vor_Jan07 = projekte.Projektwert_vor_Jan07;
  this.Projektwert = projekte.Projektwert;
  this.Netto_Projektwert = projekte.Netto_Projektwert; // Este campo es calculado, se necesita una fórmula
  this.Aufgaben_variale = projekte.Aufgaben_variale;
  this.Pstatus = projekte.Pstatus;
  this.Kurznameaktuell = projekte.Kurznameaktuell;
  this.KurznameErsteller = projekte.KurznameErsteller;
  this.MaterialDatum = projekte.MaterialDatum;
  this.MaterialLeistungsphase = projekte.MaterialLeistungsphase;
  this.MaterialBeschreibung = projekte.MaterialBeschreibung;
  this.MaterialAngelegt_von = projekte.MaterialAngelegt_von;
  this.Status_inbearbeitung = projekte.Status_inbearbeitung; // Este campo es calculado, se necesita una fórmula
  this.MaterialD = projekte.MaterialD;
  this.DateienID = projekte.DateienID;
  this.Angebotsstatus = projekte.Angebotsstatus;
  this.Laufende_Numer_Importiert = projekte.Laufende_Numer_Importiert;
  this.Übrige_Stunden_ist = projekte.Übrige_Stunden_ist; // Este campo es calculado, se necesita una fórmula
  this.Wert_Planung = projekte.Wert_Planung;
  this.Wert_Verfahren = projekte.Wert_Verfahren;
  this.vProjektID = projekte.vProjektID;
  this.vKontaktID = projekte.vKontaktID;
  this.Projektwert_Summe = projekte.Projektwert_Summe; // Este campo es resumen, se necesita una fórmula
  this.Netto_Projektwert_Summe = projekte.Netto_Projektwert_Summe; // Este campo es resumen, se necesita una fórmula
  this.Summe_Fremdleistungen = projekte.Summe_Fremdleistungen; // Este campo es resumen, se necesita una fórmula
  this.Stundenvorgaben_Summe = projekte.Stundenvorgaben_Summe; // Este campo es resumen, se necesita una fórmula
  this.Übrige_Stunden_Summe = projekte.Übrige_Stunden_Summe; // Este campo es resumen, se necesita una fórmula
  this.RestProjektwert_Netto_über_Stunden = projekte.RestProjektwert_Netto_über_Stunden; // Este campo es calculado, se necesita una fórmula
  // Nuevos campos agregados
  this.vProjektkürzel = projekte.vProjektkürzel;
  this.Angebot_Erstellt_am = projekte.Angebot_Erstellt_am;
  this.Angebot_Erstellt_von = projekte.Angebot_Erstellt_von;
  this.Angebot_Beauftragungsdatum = projekte.Angebot_Beauftragungsdatum;
  this.Projektfarbe = projekte.Projektfarbe;
  this.Wert_Grün = projekte.Wert_Grün;
  this.Wert_Verfahren_Sonstiges = projekte.Wert_Verfahren_Sonstiges;
  this.Projekt_Restwert = projekte.Projekt_Restwert; // Este campo es calculado, se necesita una fórmula
  this.Teammitglieder = projekte.Teammitglieder;
  this.Leistungsstand_Projekt = projekte.Leistungsstand_Projekt; // Este campo es calculado, se necesita una fórmula
  this.Team = projekte.Team;
  this.vMitarbeiterteam = projekte.vMitarbeiterteam;
  this.vAktiv = projekte.vAktiv; // Este campo es calculado, se necesita una fórmula
  this.Angebotssumme = projekte.Angebotssumme;
  this.Fremdleistungen_Details = projekte.Fremdleistungen_Details;
  this.ProjektwertDetails = projekte.ProjektwertDetails;
  this.Übrige_Stunden_soll = projekte.Übrige_Stunden_soll; // Este campo es calculado, se necesita una fórmula
  this.Leistungsstand_Restwert_Projekt = projekte.Leistungsstand_Restwert_Projekt; // Este campo es calculado, se necesita una fórmula
  this.vRechnungsnummer = projekte.vRechnungsnummer;
  this.Reststunden_netto = projekte.Reststunden_netto; // Este campo es calculado, se necesita una fórmula
  this.Monat = projekte.Monat;
  this.Stundendatum = projekte.Stundendatum;
  this.Reststunden_Prozent = projekte.Reststunden_Prozent; // Este campo es calculado, se necesita una fórmula
  this.ProjektFarbeID = projekte.ProjektFarbeID; // Este campo es calculado, se necesita una fórmula
  this.Summe_Projektrestwert = projekte.Summe_Projektrestwert; // Este campo es resumen, se necesita una fórmula
  this.Summe_Übrige_Stunden_Soll = projekte.Summe_Übrige_Stunden_Soll; // Este campo es resumen, se necesita una fórmula
  this.Summe_Übrige_Stunden_ist = projekte.Summe_Übrige_Stunden_ist; // Este campo es resumen, se necesita una fórmula
  this.Reststunden = projekte.Reststunden; // Este campo es calculado, se necesita una fórmula
  this.leerfeld = projekte.leerfeld;
  this.Reststunden_Kopie = projekte.Reststunden_Kopie; // Este campo es calculado, se necesita una fórmula
  this.Ampelwert = projekte.Ampelwert; // Este campo es calculado, se necesita una fórmula
  this.Leistungsstand_Projekt_ist = projekte.Leistungsstand_Projekt_ist; // Este campo es calculado, se necesita una fórmula
};

// Método para obtener todos los registros de Projekte
Projekte.getAll = result => {
  sql.query('SELECT projektname, projektkürzel, beschreibung, verantwortlicher, beginn, status, erstellt_am, erstellt_von  FROM Projekte;', (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(null, err);
      return;
    }
    console.log("Projekte: kk", res);
    result(null, res);
  });
};


// Controlador para manejar las solicitudes de búsqueda
Projekte.getSearch = (searchText, callback) => { 
  
  // Lista de campos en los que deseas buscar
 const campos = ['projektname', 'projektkürzel', 'beschreibung', 'verantwortlicher', 'beginn', 'status', 'erstellt_am', 'erstellt_von' ]; // Agrega aquí los nombres de los campos relevantes
 // Construir la parte de la consulta SQL para buscar en todos los campos
 const whereClause = campos.map(campo => `${campo} LIKE ?`).join(' OR ');
 // Consulta SQL para buscar registros que contengan el texto de búsqueda en cualquiera de los campos relevantes
 const query = `SELECT projektname, projektkürzel, beschreibung, verantwortlicher, beginn, status, erstellt_am, erstellt_von FROM Projekte WHERE ${whereClause}`;
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



Projekte.getTeammitglieder = result => {
  sql.query('SELECT DISTINCT Teammitglieder FROM Projekte;', (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(null, err);
      return;
    }
    console.log("Projekte: uu", res);
    result(null, res);
  });
};
// Método para crear un nuevo registro en la tabla Projekte
Projekte.create = (newProjekte, result) => {
  sql.query("INSERT INTO Projekte SET ?", newProjekte, (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(err, null);
      return;
    }
    console.log("Projekte creado: ", { id: res.insertId, ...newProjekte });
    result(null, { id: res.insertId, ...newProjekte });
  });
};

// ... otros métodos CRUD

module.exports = Projekte;