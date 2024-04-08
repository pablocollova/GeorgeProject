// menu.model.js
const sql = require('./db.config.js');

// Constructor del objeto Menu
const Menu = function(menu) {
  this.Variable_Firmenname = menu.Variable_Firmenname;
  // ... otros campos
};

// Método para crear un nuevo registro en la tabla Menu
Menu.create = (newMenu, result) => {
  sql.query("INSERT INTO Menu SET ?", newMenu, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Menu creado: ", { id: res.insertId, ...newMenu });
    result(null, { id: res.insertId, ...newMenu });
  });
};

// ... otros métodos CRUD

module.exports = Menu;
