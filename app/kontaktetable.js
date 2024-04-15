document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/kontakte')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.getElementById('kontakteTable').getElementsByTagName('tbody')[0];
        data.forEach(kontakte => {
          let row = tableBody.insertRow();
          let cellAbteilung = row.insertCell(0);
          cellAbteilung.textContent = kontakte.Abteilung;
          let cellAdressblock = row.insertCell(1);
          cellAdressblock.textContent = kontakte.Adressblock;
          // Continúa agregando celdas para cada columna
        });
      })
      .catch(error => console.error('Error:', error));
  });
  

  // Suponiendo que esta función se llama después de obtener los datos de la base de datos
function crearYMostrarTabla(datos) {
  // Crear la tabla y el thead
  var tabla = document.createElement('table');
  var thead = document.createElement('thead');
  tabla.appendChild(thead);

  // Asumiendo que 'datos' es un array de objetos donde las claves son los nombres de las columnas
  var columnas = Object.keys(datos[0]);

  // Crear la fila de encabezado
  var tr = document.createElement('tr');
  columnas.forEach(function(columna) {
    var th = document.createElement('th');
    th.textContent = columna;
    tr.appendChild(th);
  });
  thead.appendChild(tr);

  // Crear el tbody
  var tbody = document.createElement('tbody');
  tabla.appendChild(tbody);

  // Llenar el cuerpo de la tabla con los datos
  datos.forEach(function(objeto) {
    var tr = document.createElement('tr');
    columnas.forEach(function(columna) {
      var td = document.createElement('td');
      td.textContent = objeto[columna];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  // Añadir la tabla al DOM, por ejemplo, a un div con id 'tabla-container'
  document.getElementById('tabla-container').appendChild(tabla);
}

// Ejemplo de uso:
fetch('/api/kontakte')
  .then(response => response.json())
  .then(data => {
    crearYMostrarTabla(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
