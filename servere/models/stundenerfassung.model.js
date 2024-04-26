// stundenerfassung.model.js
const sql = require('../config/db.js');

// Constructor del objeto Stundenerfassung
const Stundenerfassung = function(stundenerfassung) {
  this.Mindestbestand = stundenerfassung.Mindestbestand;
  this.Preis = stundenerfassung.Preis;
  this.Katalogartikel = stundenerfassung.Katalogartikel;
  this.Menge_auf_Lager_rot = stundenerfassung.Menge_auf_Lager_rot;
  this.Menge_auf_Lager_schwarz = stundenerfassung.Menge_auf_Lager_schwarz;
  this.Konstante_Null = stundenerfassung.Konstante_Null;
  this.Projektnummer = stundenerfassung.Projektnummer;
  this.Projektkürzel = stundenerfassung.Projektkürzel;
  this.Tätigkeit = stundenerfassung.Tätigkeit;
  this.Leistungsart = stundenerfassung.Leistungsart;
  this.Leistungsphase = stundenerfassung.Leistungsphase;
  this.Stunden = stundenerfassung.Stunden;
  this.Projektleiter = stundenerfassung.Projektleiter;
  this.Mitarbeiter = stundenerfassung.Mitarbeiter;
  this.Summe_Projektstunden = stundenerfassung.Summe_Projektstunden;
  this.KundenID = stundenerfassung.KundenID;
  this.Datum = stundenerfassung.Datum;
  this.Kontoname = stundenerfassung.Kontoname;
  this.Stundensumme = stundenerfassung.Stundensumme;
  this.Summe_Mitarbeiterstunden = stundenerfassung.Summe_Mitarbeiterstunden;
  this.Kurzname = stundenerfassung.Kurzname;
  this.Systeminfos = stundenerfassung.Systeminfos;
  this.Geändert_von_kurzname = stundenerfassung.Geändert_von_kurzname;
  this.Geändert_von = stundenerfassung.Geändert_von;
  this.Tätigkeitsbeschreibung = stundenerfassung.Tätigkeitsbeschreibung;
  this.Von = stundenerfassung.Von;
  this.Bis = stundenerfassung.Bis;
  this.Zeitraum = stundenerfassung.Zeitraum;
  this.Umrechnung_Netto_Stunden = stundenerfassung.Umrechnung_Netto_Stunden;
  this.Summe_Umrechnung_Stunden = stundenerfassung.Summe_Umrechnung_Stunden;
  this.Letzte_Woche = stundenerfassung.Letzte_Woche;
  this.ProjektTeam = stundenerfassung.ProjektTeam;
  this.MitarbeiterTeam = stundenerfassung.MitarbeiterTeam;
  this.Monat = stundenerfassung.Monat;
  this.Anzahl = stundenerfassung.Anzahl;
  this.Stunden_Netto = stundenerfassung.Stunden_Netto;
  this.Summe_Netto_Projektstunden = stundenerfassung.Summe_Netto_Projektstunden;
  this.ProjektID = stundenerfassung.ProjektID;
  this.Total_Stunden = stundenerfassung.Total_Stunden;
  this.icon = stundenerfassung.icon;
  this.Startzeit = stundenerfassung.Startzeit;
  this.iconID = stundenerfassung.iconID;
  this.Jahreszahl = stundenerfassung.Jahreszahl;
  this.Team = stundenerfassung.Team;
  this.MitarbeiterFaktor = stundenerfassung.MitarbeiterFaktor;
  this.Stunden_Netto_mitarbeiter = stundenerfassung.Stunden_Netto_mitarbeiter;
  this.Summe_Netto_Projektstunden_Mitarbeiter = stundenerfassung.Summe_Netto_Projektstunden_Mitarbeiter;
  this.Datumsstatistik = stundenerfassung.Datumsstatistik;
  this.Summe_Netto_Projektstunden_Laufend = stundenerfassung.Summe_Netto_Projektstunden_Laufend;
  this.vAktiv = stundenerfassung.vAktiv;
  this.Summe_Netto_Mitarbeiterstunden = stundenerfassung.Summe_Netto_Mitarbeiterstunden;
  this.LeistungsphaseID = stundenerfassung.LeistungsphaseID;
  this.Summe_Leistungsphase_ProjektID = stundenerfassung.Summe_Leistungsphase_ProjektID;
  this.eins = stundenerfassung.eins;
};

// Método para obtener todos los registros de Stundenerfassung
Stundenerfassung.getAll = function(callback) {
  sql.query('SELECT * FROM Stundenerfassung;', function(error, results, fields) {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      callback(error, null);
    } else {
      console.log('Resultados de la consulta:', results);
      callback(null, results);
    }
  });
};

// Método para crear un nuevo registro en la tabla Stundenerfassung
Stundenerfassung.create = (newStundenerfassung, result) => {
  sql.query("INSERT INTO stundenerfassung SET ?", newStundenerfassung, (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(err, null);
    } else {
      console.log("Stundenerfassung creado: ", { id: res.insertId, ...newStundenerfassung });
      result(null, { id: res.insertId, ...newStundenerfassung });
    }
  });
};

// ... otros métodos CRUD

module.exports = Stundenerfassung;
