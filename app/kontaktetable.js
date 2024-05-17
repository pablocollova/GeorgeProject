// kontaktetable.js
var db;

  function crearYMostrarTablaKontakte(datos) {
    db = datos;

    var tabla = document.createElement('table');
    var containerTopVar=document.getElementById('conteiner-topvar'); 
     containerTopVar.innerHTML='';

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
    h2.textContent = 'Kontakte';

    col1.appendChild(h2);
/////////////////////////////////////////

//////////COLUMNA 2///////////////
    col2 = document.createElement('div');
    col2.className = 'col-sm-6';
   ////////////////////////////////
   ///////////SEARCH///////////////
    var searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'searchInput';
    searchInput.placeholder = 'search...';
    searchInput.addEventListener('input', function() {
        // Lógica para buscar coincidencias mientras se escribe
        const searchText = searchInput.value;
        console.log(searchText);
        // Llama a una función para enviar una solicitud al servidor con el texto de búsqueda
        searchOnServer(searchText);
    });
//////////////////////////////////////////////////
/////////////////ADD BUTTON///////////////////////
    var a1 = document.createElement('a');
    a1.href = '#kontakteModal';
    a1.className = 'btn btn-success';
    a1.setAttribute("data-toggle", "modal");
  a1.onclick = function () {
    addModalFields(); // Mostrar el modal con los datos del registro seleccionado
  };

    var i1 = document.createElement('i');
    i1.setAttribute('class','material-icons');
    i1.innerHTML = '&#xE147;';       
    
    var span1 = document.createElement('span'); 
    span1.textContent = 'Neues Kontakte hinzufügen';

    a1.appendChild(i1);
    a1.appendChild(span1);
////////////////////////////////////////////////
////////////////DELETE BUTTON/////////////////////
var a2 = document.createElement("a");
a2.href = "#kontakteModal";
a2.className = "btn btn-danger";
a2.setAttribute("data-toggle", "modal");

var i2 = document.createElement("i");
i2.setAttribute("class", "material-icons");
i2.innerHTML = "&#xE15C;";

var span2 = document.createElement("span");
span2.textContent = "Delete";

a2.appendChild(i2);
a2.appendChild(span2);
////////////////////////////////////////////////
////////////////EDIT BUTTON/////////////////////
var a3 = document.createElement("a");
  a3.href = "#kontakteModal";
  a3.className = "btn btn-edit";
  a3.setAttribute("data-toggle", "modal");
  a3.onclick = function () {
    var selectedItems = document.querySelectorAll(".selectItem:checked");
    if (selectedItems.length === 1) {
      var index = selectedItems[0].closest("tr").dataset.index;
      console.log("datos[index]", datos[index]);
      updateKontakteModalFields(datos[index]); // Mostrar el modal con los datos del registro seleccionado
    }
  };

  var i3 = document.createElement("i");
  i3.setAttribute("class", "material-icons");

  i3.innerHTML = "&#xf044;";

  var span3 = document.createElement("span");
  span3.textContent = "Edit";

  a3.appendChild(i3);
  a3.appendChild(span3);
/////////////////////////////////////////////////
////////////COL 2///////////////////////////////////
  col2.appendChild(a1);
  col2.appendChild(a2);
  col2.appendChild(a3);
  ///////////////////////////////////
    row.appendChild(col1);
    row.appendChild(col2);
   
    table_title.appendChild(row);
    
    containerTopVar.appendChild(table_title);
    tabla.className = 'table table-striped table-hover table-dark';

    var contenedor = document.getElementById("tabla-container");
  contenedor.innerHTML = "";
    var thead = document.createElement('thead');
    tabla.appendChild(thead);
    var columnas = Object.keys(datos[0]);
    
    // Creamos una columna para los botones
    columnas.unshift('Seleccionar');    
    var tr = document.createElement('tr');
    columnas.forEach(function(columna) {
        var th = document.createElement('th');
        if (columna === "Seleccionar") {
            th.innerHTML = '<input type="checkbox" id="selectAll">'; // Checkbox para seleccionar todos
          } else {
            th.textContent = columna;
          }
          tr.appendChild(th);
        });
        thead.appendChild(tr);

    var tbody = document.createElement('tbody');
    tabla.appendChild(tbody);
    datos.forEach(function(objeto, index) {
        var tr = document.createElement('tr');
        tr.dataset.index = index; // Guardamos el índice del objeto en el dataset para su posterior uso

        // Celda para la casilla de verificación individual
        var checkboxTd = document.createElement("td");
        checkboxTd.innerHTML = '<input type="checkbox" class="selectItem">';
        tr.appendChild(checkboxTd);
    
        // Resto de las celdas...
        columnas.slice(1).forEach(function (columna) {
          // Usamos slice para omitir la columna 'Seleccionar'
          var td = document.createElement("td");
          td.textContent = objeto[columna];
          tr.appendChild(td);
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
  // Evento para mostrar/ocultar el botón de editar
  document.addEventListener("change", function (e) {
    if (e.target.classList.contains("selectItem")) {
      var selectedItems = document.querySelectorAll(".selectItem:checked");
      a3.disabled = selectedItems.length !== 1;
    }
  });

// Botón para seleccionar todos los checkboxes
document.getElementById("selectAll").addEventListener("change", function (e) {
    document.querySelectorAll(".selectItem").forEach(function (checkbox) {
      checkbox.checked = e.target.checked;
    });
  });
}

function updateKontakteModalFields(data) {
    console.log("updateKontakteModalFields", data);
    document.getElementById("dialogKontakteTitle").textContent = "Edit Kontakte";
    // Asegúrate de que 'data' es un objeto con las propiedades correctas
    document.getElementById("kontakteId").textContent = data.KontaktID || "";
   // document.getElementById("kontakteFirma").value = data.firma || "";
    document.getElementById("kontakteAnrede").value = data.Anrede || "";
    document.getElementById("kontakteVorname").value = data.Vorname || "";
    document.getElementById("kontakteNachname").value =data.Nachname || "";
    document.getElementById("kontakteTelefon" ).value =data.Telefon_1|| "";
    document.getElementById("kontakteMobil").value =data.Mobil_1 || "";
    document.getElementById("kontakteEmail").value =data.Email_1|| "";
    document.getElementById("kontakteWebadress").value =data.Webadresse || "";
    document.getElementById("kontakteAbteilung").value =data.Abteilung || "";
    document.getElementById("kontakteTyp").value =data.Typ || "";
    //document.getElementById("kontakteKunde").value = data.Kunde || "";
   
  
    document.getElementById("editKontakteButton").onclick = updateKontakte();
    document.getElementById("submitModalKontakte").value = "Edit";
  }
  
  function addKontakte() {
    var datosNuevos = {
      vorname: document.getElementById("vorname").value,
      abteilung: document.getElementById("abteilung").value,
      email_1: document.getElementById("email_1").value,
      email_2: document.getElementById("email_2").value,
      kunde: document.getElementById("kunde").value,
      mobil_1: document.getElementById("mobil_1").value,
      privat_mobil: document.getElementById("privat_mobil").value,
      privat_telefon: document.getElementById("privat_telefon").value,
      telefon_1: document.getElementById("telefon_1").value,
        typ: document.getElementById("typ").value,
        webadresse: document.getElementById("webadresse").value,
        verantwortlicher: document.getElementById("verantworlicher").value,
    };/* Telefon_1 Typ Verantwortlicher Vorname Webadresse */
    
    console.log("datosNuevos", datosNuevos);
    const url = `/api/kontakte/add?`+ new URLSearchParams(datosNuevos);
    fetch(url, {
      method: "POST", //
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosNuevos),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos actualizados con éxito:", data);
        // Aquí puedes cerrar el modal o mostrar un mensaje de éxito
        $("#kontakteModal").modal("hide");
      })
      
      .catch((error) => {
        console.log(response);
        console.error("Error al actualizar los datos:", error);
      });
  }
  
  function addModalKontakteFields() {
    // Asegúrate de que 'data' es un objeto con las propiedades correctas
    document.getElementById("dialogTitle").textContent = 'Add Kontakte';
  
    document.getElementById("submitButton").onclick = addKontakte;
    document.getElementById("submitButton").value = "Hinzufügen";
  }

  function searchOnServer(searchText) {
    if (!searchText) {
      fetch("/api/kontakte")
        .then((response) => response.json())
        .then((datos) => {
          crearYMostrarTablaKontakte(datos);
        })
        .catch((error) => {
          console.error("Error al obtener los datos:", error);
        });
    } else {
      // Asegúrate de que 'searchText' es una cadena de texto válida
      const url = `/api/kontakte/search?texto=${encodeURIComponent(searchText)}`;
  
      fetch(url)
        .then((response) => response.json())
        .then((datos) => {
          console.log("datos", datos);
          crearYMostrarTablaKontakte(datos);
        })
        .catch((error) => {
          console.error("Error al realizar la búsqueda:", error);
        });
    }
  }
  
  function updateKontakte() {
    // Capturar los valores del formulario
    console.log("updateKontakte");
    var datosActualizados = {
      kontakteId: document.getElementById("kontakteId").textContent,
      firma: document.getElementById("kontakteFirma").value,
      anrede: document.getElementById("kontakteAnrede").value,
      vorname: document.getElementById("kontakteVorname").value,
      nachname: document.getElementById("kontakteNachname").value,
      telefon: document.getElementById("kontakteTelefon").value,
      mobil: document.getElementById("kontakteMobil").value,
      email: document.getElementById("kontakteEmail").value,
      webadress: document.getElementById("kontakteWebadress").value,
      abteilung: document.getElementById("kontakteAbteilung").value,
      typ: document.getElementById("kontakteTyp").textContent
    };
  
    // Aquí deberías agregar el código para enviar estos datos al servidor
    // Esto podría ser una solicitud AJAX, fetch o el método que prefieras
    // Por ejemplo, usando fetch:
    console.log(datosActualizados);
    fetch(`/api/kontakte/update/${datosActualizados.kontakteId}`, {
      method: "PUT", // o 'PUT' si estás actualizando
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos actualizados con éxito:", data);
        // Aquí puedes cerrar el modal o mostrar un mensaje de éxito
        $("#kontakteModal").modal("hide");
      })
      .catch((error) => {
        console.log(response);
        console.error("Error al actualizar los datos:", error);
      });
  }
  
