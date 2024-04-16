// kontaktetable.js
var db;
document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/kontakte')
      .then(response => response.json())
      .then(datos => {
        crearYMostrarTabla(datos);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
      
  });
  
  function crearYMostrarTabla(datos) {
    db=datos;
    var tabla = document.createElement('table');
    tabla.className = 'table table-striped table-hover';
    var thead = document.createElement('thead');
    tabla.appendChild(thead);
    var columnas = Object.keys(datos[0]);
    var tr = document.createElement('tr');
    columnas.forEach(function(columna) {
      var th = document.createElement('th');
      th.textContent = columna;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    var tbody = document.createElement('tbody');
    tabla.appendChild(tbody);
    datos.forEach(function(objeto) {
      var tr = document.createElement('tr');
      columnas.forEach(function(columna) {
        var td = document.createElement('td');
        td.textContent = objeto[columna];
        tr.appendChild(td);
      });
      var accionesTd = document.createElement('td');
      accionesTd.innerHTML = '<button class="edit-btn" onclick="editarRegistro(this)">Editar</button>' +
                             '<button class="delete-btn" onclick="eliminarRegistro(this)">Eliminar</button>' +
                             '<button class="save-btn" onclick="guardarRegistro(this)">Guardar</button>' +
                             '<button class="cancel-btn" onclick="cancelarEdicion(this)">Cancelar</button>';
      tr.appendChild(accionesTd);
      tbody.appendChild(tr);
    // Add a scroll to the table
    tabla.style.overflowY = 'scroll';
    tabla.style.maxHeight = '200px'; // Adjust the height as needed
    tabla.style.width = '70%';
    });
    var contenedor = document.getElementById('tabla-container');
    if (contenedor) {
      contenedor.innerHTML = '';
      
      contenedor.appendChild(tabla);
    } else {
      console.error('No se encontró el elemento contenedor para la tabla.');
    }
      var addButton = document.createElement('button');
      addButton.textContent = 'Agregar Registro';
      addButton.className = 'add-btn';
      addButton.onclick = agregarRegistro;
      contenedor.appendChild(addButton);
    

 
  }


  function editarRegistro(btn) {
    var tr = btn.parentNode.parentNode;
    var celdas = tr.getElementsByTagName('td');
    for (var i = 0; i < celdas.length - 1; i++) {
      var valorActual = celdas[i].innerText;
      celdas[i].innerHTML = '<input type="text" value="' + valorActual + '">';
    }
    btn.style.display = 'none';
    tr.querySelector('.delete-btn').style.display = 'none';
    tr.querySelector('.save-btn').style.display = 'inline';
    tr.querySelector('.cancel-btn').style.display = 'inline';
  }
  
  function eliminarRegistro(btn) {
    var tr = btn.parentNode.parentNode;
    var index = tr.getAttribute('data-index');
    // Aquí deberías agregar el código para eliminar el registro
    // Por ejemplo, puedes hacer una solicitud DELETE a tu API
    // Por ahora, simplemente eliminaremos la fila de la tabla
    tr.parentNode.removeChild(tr);
  }
  
  function guardarRegistro(btn) {
    var tr = btn.parentNode.parentNode;
    var celdas = tr.getElementsByTagName('td');
    var datosActualizados = {};
    for (var i = 0; i < celdas.length - 1; i++) {
      var input = celdas[i].getElementsByTagName('input')[0];
      datosActualizados[columnas[i]] = input.value;
      celdas[i].innerText = input.value;
    }
    // Aquí deberías agregar el código para guardar los datos actualizados
    // Por ejemplo, puedes hacer una solicitud PUT a tu API
    // Por ahora, simplemente actualizaremos la interfaz de usuario
    btn.style.display = 'none';
    tr.querySelector('.cancel-btn').style.display = 'none';
    tr.querySelector('.edit-btn').style.display = 'inline';
    tr.querySelector('.delete-btn').style.display = 'inline';
  }
  
  function cancelarEdicion(btn) {
    var tr = btn.parentNode.parentNode;
    var celdas = tr.getElementsByTagName('td');
    for (var i = 0; i < celdas.length - 1; i++) {
      var valorOriginal = datos[tr.getAttribute('data-index')][columnas[i]];
      celdas[i].innerText = valorOriginal;
    }
    btn.style.display = 'none';
    tr.querySelector('.save-btn').style.display = 'none';
    tr.querySelector('.edit-btn').style.display = 'inline';
    tr.querySelector('.delete-btn').style.display = 'inline';
  }
  
  function agregarRegistro() {
    var tabla = document.querySelector('#tabla-container table');
    var columnas = Object.keys(datos[0]);
    var tr = document.createElement('tr');
    for (var i = 0; i < columnas.length; i++) {
      var td = document.createElement('td');
      if (i < columnas.length - 1) {
        td.innerHTML = '<input type="text">';
      } else {
        td.innerHTML = '<button class="save-btn" onclick="guardarNuevoRegistro(this)">Guardar</button>' +
                       '<button class="cancel-btn" onclick="cancelarNuevoRegistro(this)">Cancelar</button>';
      }
      tr.appendChild(td);
    }
    document.querySelector('#tabla-container table tbody').appendChild(tr);
  }
  
  function guardarNuevoRegistro(btn) {
    var tr = btn.parentNode.parentNode;
    var celdas = tr.getElementsByTagName('td');
    var nuevoRegistro = {};
    for (var i = 0; i < celdas.length - 1; i++) {
      var input = celdas[i].getElementsByTagName('input')[0];
      nuevoRegistro[columnas[i]] = input.value;
    }
    // Aquí deberías agregar el código para guardar el nuevo registro
    // Por ejemplo, puedes hacer una solicitud POST a tu API
    // Por ahora, simplemente agregaremos el nuevo registro a la interfaz de usuario
    datos.push(nuevoRegistro);
    crearYMostrarTabla(datos); // Actualizar la tabla
  }
  
  function cancelarNuevoRegistro(btn) {
    var tr = btn.parentNode.parentNode;
    tr.parentNode.removeChild(tr);
  }