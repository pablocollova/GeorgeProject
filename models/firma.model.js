
    // firma.model.js
const sql = require('../config/db.js');

// Constructor del objeto Firma
const Firma = function(firma) {
  this.firmaId = mitarbeiter.Adresse_1_Typ;
  this.firma = mitarbeiter.Adresse_2_Typ;
  this.detailbeschreibung = mitarbeiter.Ort_1;
};

// Método para obtener todos los registros de Mitarbeiter
Firma.getAll = result => {
  sql.query('SELECT * FROM Firma;', (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(null, err);
      return;
    }
    console.log("Firma: ", res);
    result(null, res);
  });
};



Firma.searchFbyK = async (searchText, result) => {
    try {
        // Ejecuta una consulta para obtener los IDs de las empresas asociadas al contacto
        const [firmIdsResult] = await sql.query(`
            SELECT firmenID 
            FROM kontakteFirma
            WHERE kontakteID = ?
        `, [searchText]);

        const firmIds = firmIdsResult.map(row => row.firmenID);

        if (firmIds.length === 0) {
            result(null, []);
            return;
        }

        // Obtiene los nombres de las empresas usando los IDs obtenidos
        const [firmsResult] = await sql.query(`
            SELECT firma 
            FROM Firma 
            WHERE firmaID IN (?)
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
Firma.create = (newFirma, result) => {
  sql.query("INSERT INTO Firma SET ?", newFirma, (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(err, null);
      return;
    }
    console.log("Firma creado: ", { id: res.insertId, ...newFirma });
    result(null, { id: res.insertId, ...newFirma });
  });
};

// ... otros métodos CRUD

module.exports = Firma;
