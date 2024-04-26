// rechnungen.model.js
const sql = require('../config/db.js');

// Constructor del objeto Rechnungen
const Rechnungen = function(rechnungen) {
  this.Erstellt_von = rechnungen.Erstellt_von;
  this.Geändert_am = rechnungen.Geändert_am;
  this.HiliteSortiertNach = rechnungen.HiliteSortiertNach;
  this.RechnungID = rechnungen.RechnungID;
  this.Eins = rechnungen.Eins; // Este campo es calculado, se necesita una fórmula
  this.BerichtBestellmonat = rechnungen.BerichtBestellmonat; // Este campo es calculado, se necesita una fórmula
  this.BerichtBestellmonat_anzeigen = rechnungen.BerichtBestellmonat_anzeigen; // Este campo es calculado, se necesita una fórmula
  this.BerichtBestellquartal = rechnungen.BerichtBestellquartal; // Este campo es calculado, se necesita una fórmula
  this.BerichtBestellwoche = rechnungen.BerichtBestellwoche; // Este campo es calculado, se necesita una fórmula
  this.BerichtBestellwoche_anzeigen = rechnungen.BerichtBestellwoche_anzeigen; // Este campo es calculado, se necesita una fórmula
  this.BerichtVersandmonat = rechnungen.BerichtVersandmonat; // Este campo es calculado, se necesita una fórmula
  this.BerichtVersandmonat_anzeigen = rechnungen.BerichtVersandmonat_anzeigen; // Este campo es calculado, se necesita una fórmula
  this.BerichtVersandwoche = rechnungen.BerichtVersandwoche; // Este campo es calculado, se necesita una fórmula
  this.BerichtVersandwoche_anzeigen = rechnungen.BerichtVersandwoche_anzeigen; // Este campo es calculado, se necesita una fórmula
  this.Erstellungsdatum = rechnungen.Erstellungsdatum;
  this.Versanddatum = rechnungen.Versanddatum;
  this.Bericht_Versand_Quartal = rechnungen.Bericht_Versand_Quartal; // Este campo es calculado, se necesita una fórmula
  this.Temp_Daten = rechnungen.Temp_Daten;
  this.Projektkürzel = rechnungen.Projektkürzel;
  this.Projektstatus_abgeschlossen = rechnungen.Projektstatus_abgeschlossen;
  this.ProjektID = rechnungen.ProjektID;
  this.KundenID = rechnungen.KundenID;
  this.Rechnungskürzel = rechnungen.Rechnungskürzel;
  this.RechnungsName = rechnungen.RechnungsName;
  this.Rechnungsnummer = rechnungen.Rechnungsnummer;
  this.Rechnungsdatum = rechnungen.Rechnungsdatum;
  this.Projektname = rechnungen.Projektname;
  this.test = rechnungen.test;
  this.Status = rechnungen.Status;
  this.KopftextID = rechnungen.KopftextID;
  this.abzügl_bezahlter_Abschlagsrechnungen_brutto = rechnungen.abzügl_bezahlter_Abschlagsrechnungen_brutto;
  this.SteuerSatz = rechnungen.SteuerSatz;
  this.Rechnungsbetrag_Brutto = rechnungen.Rechnungsbetrag_Brutto; // Este campo es calculado, se necesita una fórmula
  this.vPos = rechnungen.vPos;
  this.Fremdleistung_Netto = rechnungen.Fremdleistung_Netto;
  this.Summe_Fremdleistung_Brutto = rechnungen.Summe_Fremdleistung_Brutto; // Este campo es resumen, se necesita una fórmula
  this.Restbetrag_brutto = rechnungen.Restbetrag_brutto; // Este campo es calculado, se necesita una fórmula
  this.Summe_Restbetrag_brutto = rechnungen.Summe_Restbetrag_brutto; // Este campo es resumen, se necesita una fórmula
  this.Summe_Bezahlte_Beiträge = rechnungen.Summe_Bezahlte_Beiträge; // Este campo es resumen, se necesita una fórmula
  this.Summe_Rechnungsbetrag_brutto = rechnungen.Summe_Rechnungsbetrag_brutto; // Este campo es resumen, se necesita una fórmula
  this.Nr = rechnungen.Nr;
  this.Priv_Oeff = rechnungen.Priv_Oeff;
  this.NETTO = rechnungen.NETTO;
  this.Steuerwert = rechnungen.Steuerwert; // Este campo es calculado, se necesita una fórmula
  this.BRUTTO = rechnungen.BRUTTO; // Este campo es calculado, se necesita una fórmula
  this.Fremdleistung_Brutto = rechnungen.Fremdleistung_Brutto; // Este campo es calculado, se necesita una fórmula
  this.Vorlage = rechnungen.Vorlage;
  this.Verm_Re_Betrag_brutto = rechnungen.Verm_Re_Betrag_brutto; // Este campo es calculado, se necesita una fórmula
  this.Zahlungsziel = rechnungen.Zahlungsziel;
  this.Mahnungsnummer = rechnungen.Mahnungsnummer;
  this.Mahnung = rechnungen.Mahnung;
  this.Eingangszahlung = rechnungen.Eingangszahlung;
  this.Summe_Netto = rechnungen.Summe_Netto; // Este campo es resumen, se necesita una fórmula
  this.Summe_Fremdleistungen_Netto = rechnungen.Summe_Fremdleistungen_Netto; // Este campo es resumen, se necesita una fórmula
  this.Summe_Steuerwert = rechnungen.Summe_Steuerwert; // Este campo es resumen, se necesita una fórmula
  this.Summe_Brutto = rechnungen.Summe_Brutto; // Este campo es resumen, se necesita una fórmula
  this.Summe_Vorlage = rechnungen.Summe_Vorlage; // Este campo es resumen, se necesita una fórmula
  this.Summe_VermRechnBetrBrutto = rechnungen.Summe_VermRechnBetrBrutto; // Este campo es resumen, se necesita una fórmula
  this.Summe_Eingangszahlungen = rechnungen.Summe_Eingangszahlungen; // Este campo es resumen, se necesita una fórmula
  this.Summe_Noch_Offen = rechnungen.Summe_Noch_Offen; // Este campo es calculado, se necesita una fórmula
  this.Summe_Brutto_Global = rechnungen.Summe_Brutto_Global; // Este campo es resumen, se necesita una fórmula
  this.Einzahlungsdatum = rechnungen.Einzahlungsdatum;
  this.Noch_Offen = rechnungen.Noch_Offen; // Este campo es calculado, se necesita una fórmula
};

// Método para obtener todos los registros de Rechnungen
Rechnungen.getAll = result => {
  sql.query('SELECT * FROM rechnungen', (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(null, err);
      return;
    }
    console.log("rechnungen: ", res);
    result(null, res);
  });
};

// Método para crear un nuevo registro en la tabla Rechnungen
Rechnungen.create = (newRechnungen, result) => {
  sql.query("INSERT INTO rechnungen SET ?", newRechnungen, (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(err, null);
      return;
    }
    console.log("Rechnungen creado: ", { id: res.insertId, ...newRechnungen });
    result(null, { id: res.insertId, ...newRechnungen });
  });
};

// ... otros métodos CRUD

module.exports = Rechnungen;
