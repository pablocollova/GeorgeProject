// projektetable.js
var db;
/*document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/projekte')
      .then(response => response.json())
      .then(datos => {
        crearYMostrarTabla(datos);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
      
  });*/





  function crearYMostrarTablaProjekte(datos) {

    //creo tabla
    var tabla = document.createElement('table');
    var containerTopVar=document.getElementById('conteiner-topvar'); 
    // containerTopVar.innerHTML='';

    //barra de titulo
    var table_title = document.createElement('div');
    table_title.className = 'table-title';

    //fila
    var row = document.createElement('div');
    row.className = 'row';

    ////////COLUMNA 1///////////////
    var col1 = document.createElement('div');
    col1.className = 'col-sm-6';

    var h2 = document.createElement('h2');
    h2.textContent = 'Projekte';

    col1.appendChild(h2);
/////////////////////////////////////////

//////////COLUMNA 2///////////////
    col2 = document.createElement('div');
    col2.className = 'col-sm-6';
   
    var a1 = document.createElement('a');
    a1.href = '#addEmployeeModal';
    a1.className = 'btn btn-success';
    a1.setAttribute('data-toggle', 'modal');


    var searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'searchInput';
    searchInput.placeholder = 'search...';
    searchInput.addEventListener('input', function() {
        // Lógica para buscar coincidencias mientras se escribe
        const searchText = searchInput.value;
        // Llama a una función para enviar una solicitud al servidor con el texto de búsqueda
        searchOnServer(searchText);
    });




    var i1 = document.createElement('i');
    i1.setAttribute('class','material-icons');
    i1.innerHTML = '&#xE147;';       
    

    var span1 = document.createElement('span'); 
    span1.textContent = 'Neues Projekt hinzufügen';

    a1.appendChild(i1);
    a1.appendChild(span1);

/*
    var a2 = document.createElement('a');
    a2.href = '#deleteEmployeeModal';
    a2.className = 'btn btn-danger';
    a2.setAttribute('data-toggle', 'modal');

    var i2 = document.createElement('i');
    i2.className = 'material-icons';
    i2.textContent = '&#xE15C;';

    var span2 = document.createElement('span');
    span2.textContent = 'Delete';

    a2.appendChild(i2);
    a2.appendChild(span2);
*/
    col2.appendChild(searchInput);
    col2.appendChild(a1);
    //col2.appendChild(a2);
////////////////col2/////////////////////

    row.appendChild(col1);
    row.appendChild(col2);
   
    table_title.appendChild(row);
    
    containerTopVar.appendChild(table_title);
   
    tabla.className = 'table table-striped table-hover table-dark';
   
    var contenedor = document.getElementById('tabla-container');
contenedor.innerHTML='';
  
    var thead = document.createElement('thead');
    tabla.appendChild(thead);
    var columnas = Object.keys(datos[0]);
    
    // Creamos una columna para los botones
    columnas.unshift('Acciones');
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
        // Creamos la celda para los botones
        var accionesTd = document.createElement('td');
        accionesTd.innerHTML = '<button class="edit-btn btn btn-outline-primary btn-sm" onclick="editarRegistro(this)"><i class="fas fa-edit"></i></button>' +
            '<button class="delete-btn btn btn-outline-danger btn-sm" onclick="eliminarRegistro(this)"><i class="fas fa-trash-alt"></i></button>' +
            '<button class="save-btn btn btn-outline-success btn-sm" onclick="guardarRegistro(this)"><i class="fas fa-save"></i></button>' +
            '<button class="cancel-btn btn btn-outline-secondary btn-sm" onclick="cancelarEdicion(this)"><i class="fas fa-times"></i></button>';
        tr.appendChild(accionesTd);
        columnas.forEach(function(columna) {
            if (columna !== 'Acciones') {
                var td = document.createElement('td');
                td.textContent = objeto[columna];
                tr.appendChild(td);
            }
        });
        tbody.appendChild(tr);
    });

   
    if (contenedor) {
        contenedor.innerHTML = '';
        contenedor.style.overflowY = 'scroll';
        contenedor.style.position = 'relative'; // Establece el ancho de la tabla
        contenedor.style.maxHeight = '600px'; // Ajusta la altura según sea necesario
        contenedor.style.width = '100%'; // Establece el ancho de la tabla
        contenedor.appendChild(tabla);
    } else {
        console.error('No se encontró el elemento contenedor para la tabla.');
    }
    var addButton = document.createElement('button');
    addButton.textContent = 'Agregar Registro';
    addButton.className = 'add-btn btn btn-outline-primary'; // Agrega la clase 'btn' para dar estilo de botón
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
            td.innerHTML = '<button class="save-btn btn btn-outline-primary" onclick="guardarNuevoRegistro(this)">Guardar</button>' +
                '<button class="cancel-btn btn btn-outline-secondary" onclick="cancelarNuevoRegistro(this)">Cancelar</button>';
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



function loadCheckBox(teamLeaders){

    console.log('teamLeaders', teamLeaders);
    const tabsContainer = document.getElementById('tabsConteiner');
    tabsContainer.innerHTML = '';
    const checkBoxList = document.createElement('ul');

    teamLeaders.forEach(name => {
        const listItem = document.createElement('li');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.value = name.Teammitglieder;
        checkBox.innerHTML = name.Teammitglieder.innerHTML;
        console.log(name.Teammitglieder.innerText);
        listItem.innerText = name.Teammitglieder;
        const label = document.createElement('label');
        label.textContent = name;
        
        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        checkBoxList.appendChild(listItem);
    });

    tabsContainer.appendChild(checkBoxList);
}


function searchOnServer(searchText) {
    // Realiza una solicitud al servidor, por ejemplo, utilizando AJAX
    // Aquí hay un ejemplo utilizando fetch
    fetch(`/api/all?texto=${searchText}`)
        .then(response => response.json())
        .then(data => {
            // Maneja la respuesta del servidor y actualiza la interfaz de usuario
            // con los resultados de la búsqueda
            displaySearchResults(data);
        })
        .catch(error => console.error('Error al buscar:', error));
}

function displaySearchResults(results) {
    // Lógica para mostrar los resultados de la búsqueda en la interfaz de usuario
    // Por ejemplo, actualiza la tabla con los resultados de la búsqueda
}