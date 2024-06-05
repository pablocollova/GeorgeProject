const pool = require('../config/db2.js');

// Constructor del objeto Firma
const Firma = function(firma) {
  this.firmaId = mitarbeiter.Adresse_1_Typ;
  this.firma = mitarbeiter.Adresse_2_Typ;
  this.detailbeschreibung = mitarbeiter.Ort_1;
};

// Método para obtener todos los registros de Mitarbeiter
Firma.getAll = async (result) => {
    try {
        const [res] = await pool.query('SELECT * FROM Firma;');
        console.log("Firma: ", res);
        result(null, res);
    } catch (err) {
        console.error("error: ", err);
        result(err, null);
    }
};

Firma.getSearchFbyK = async (searchText, result) => {
    try {
        console.log("firmamodel", searchText);
        const [firmIdsResult] = await pool.query(`
            SELECT firmaId 
            FROM kontakteFirma
            WHERE KontaktID = ?
        `, [searchText]);

        console.log("firmIdsResult: ", firmIdsResult);
        if (!firmIdsResult.length) {
            result(null, []);
            return;


        }

        const firmIds = firmIdsResult.map(row => row.firmaId);
        console.log("firmIds: ", firmIds);

        if (firmIds.length === 0) {
            result(null, []);
            return;
        }

        const [firmsResult] = await pool.query(`
            SELECT firma 
            FROM Firma 
            WHERE firmaId IN (?)
        `, [firmIds]);

        const firmNames = firmsResult.map(row => row.firma);
        console.log("Firma: ", firmNames);
        result(null, firmNames);
    } catch (error) {
        console.error("Error fetching firms: ", error);
        result(error, null);
    }
};

// Método para crear un nuevo registro en la tabla Firma
Firma.create = async (newFirma, result) => {
    try {
        const [res] = await pool.query("INSERT INTO Firma SET ?", newFirma);
        console.log("Firma creado: ", { id: res.insertId, ...newFirma });
        result(null, { id: res.insertId, ...newFirma });
    } catch (err) {
        console.error("error: ", err);
        result(err, null);
    }
};

module.exports = Firma;
