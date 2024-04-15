// kontaktetable.js

// Esta función se llamará automáticamente cuando se cargue la página.
document.addEventListener('DOMContentLoaded', function() {
  // Realiza una solicitud a la API para obtener los datos de 'kontakte'.
  fetch('/api/kontakte')
    .then(response => {console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(datos => {
      console.log('Datos recibidos:', datos); // Agrega este console.log para ver los datos recibidos.
      // Llama a la función para crear la tabla con los datos recibidos.
      crearYMostrarTabla(datos);
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
});

// Función para crear y mostrar la tabla con los datos.
function crearYMostrarTabla(datos) {
  // Crear la tabla y el thead.
  var tabla = document.createElement('table');
  var thead = document.createElement('thead');
  tabla.appendChild(thead);

  // Asumiendo que 'datos' es un array de objetos donde las claves son los nombres de las columnas.
  var columnas = Object.keys(datos[0]);

  // Crear la fila de encabezado.
  var tr = document.createElement('tr');
  columnas.forEach(function(columna) {
    var th = document.createElement('th');
    th.textContent = columna;
    tr.appendChild(th);
  });
  thead.appendChild(tr);

  // Crear el tbody.
  var tbody = document.createElement('tbody');
  tabla.appendChild(tbody);

  // Llenar el cuerpo de la tabla con los datos.
  datos.forEach(function(objeto) {
    var tr = document.createElement('tr');
    columnas.forEach(function(columna) {
      var td = document.createElement('td');
      td.textContent = objeto[columna];
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  // Añadir la tabla al DOM, por ejemplo, a un div con id 'tabla-container'.
  var contenedor = document.getElementById('tabla-container');
  if (contenedor) {
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de añadir la nueva tabla.
    contenedor.appendChild(tabla);
  } else {
    console.error('No se encontró el elemento contenedor para la tabla.');
  }
}
