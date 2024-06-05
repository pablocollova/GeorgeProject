// mitarbeitertable.js
var db;
$(document).ready(function() {
});
function cargarTablaMitarbeiter(datos) {

  var tabla = document.createElement("table");
  tabla.className = "table table-striped table-hover table-dark";
  var contenedor = document.getElementById("tabla-container");
  contenedor.innerHTML = "";
  var thead = document.createElement("thead");
  tabla.appendChild(thead);
  var columnas = Object.keys(datos[0]);

  // Añadimos una columna para las casillas de verificación
  columnas.unshift("Seleccionar");
  var tr = document.createElement("tr");
  columnas.forEach(function (columna) {
    var th = document.createElement("th");
    if (columna === "Seleccionar") {
      th.innerHTML = '<input type="checkbox" id="selectAll">'; // Checkbox para seleccionar todos
    } else {
      th.textContent = columna;
    }
    tr.appendChild(th);
  });
  thead.appendChild(tr);

  var tbody = document.createElement("tbody");
  tabla.appendChild(tbody);
  datos.forEach(function (objeto, index) {
    var tr = document.createElement("tr");
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

    tr.addEventListener('dblclick', function () {
      mitarbeiterTabs(datos[this.dataset.index]);
  });

  tbody.appendChild(tr);
});
  
  if (contenedor) {
    contenedor.innerHTML = "";
    contenedor.style.overflowY = "scroll";
    contenedor.style.position = "relative"; // Establece el ancho de la tabla
    contenedor.style.maxHeight = "600px"; // Ajusta la altura según sea necesario
    contenedor.style.width = "100%"; // Establece el ancho de la tabla
    contenedor.appendChild(tabla);
  } else {
    console.error("No se encontró el elemento contenedor para la tabla.");
  }
  a3=document.getElementById("editMitarbeiterButton");
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

function title_tableMitarbeiter(datos) {
//barra de titulo
var table_title = document.createElement("div");
table_title.className = "table-title";

//fila
var row = document.createElement("div");
row.className = "row";

////////COLUMNA 1///////////////
var col1 = document.createElement("div");
col1.className = "col-sm-6";

var h2 = document.createElement("h2");
h2.textContent = "Mitarbeiter";

col1.appendChild(h2);
/////////////////////////////////////////

//////////COLUMNA 2///////////////
col2 = document.createElement("div");
col2.className = "col-sm-6";
////////////////////////////////
 ///////////SEARCH///////////////
var searchInput = document.createElement("input");
searchInput.style.color = "black";
searchInput.type = "text";
searchInput.id = "searcMitarbeiterhInput";
searchInput.placeholder = "search...";
searchInput.addEventListener("input", function () {
  // Lógica para buscar coincidencias mientras se escribe
  const searchText = searchInput.value;
  // Llama a una función para enviar una solicitud al servidor con el texto de búsqueda
  searchOnMitarbeiter(searchText);
});
//////////////////////////////////////////////////
/////////////////ADD BUTTON///////////////////////
var a1 = document.createElement("a");
a1.href = "#tabsMitarbeiter";//"#editMitarbeiterModal";
a1.className = "btn btn-success";
a1.setAttribute("data-toggle", "modal");
a1.onclick = function () {
  addModalFields(); // Mostrar el modal con los datos del registro seleccionado
};

var i1 = document.createElement("i");
i1.setAttribute("class", "material-icons");
i1.innerHTML = "&#xE147;";

var span1 = document.createElement("span");
span1.textContent = "Neues Projekt hinzufügen";

a1.appendChild(i1);
a1.appendChild(span1);
////////////////////////////////////////////////
////////////////DELETE BUTTON/////////////////////
var a2 = document.createElement("a");
a2.href = "#deletemitarbeiterModal";
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
a3.href = "#editMitarbeiterModal";
a3.className = "btn btn-edit";
a3.setAttribute("data-toggle", "modal");
a3.disabled =true;
a3.onclick = function () {
  var selectedItems = document.querySelectorAll(".selectItem:checked");
  if (selectedItems.length === 1) {
    var index = selectedItems[0].closest("tr").dataset.index;
    updateModalFields(datos[index]); // Mostrar el modal con los datos del registro seleccionado
  }
};
a3.setAttribute("id", "editMitarbeiterButton");  // Añadir un id para poder deshabilitar el botón
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
col2.appendChild(searchInput);
///////////////////////////////////
row.appendChild(col1);
row.appendChild(col2);

table_title.appendChild(row);
return table_title;
}

function crearYMostrarTablaMitarbeiter(datos) {
  var containerTopVar = document.getElementById("conteiner-topvar");
  containerTopVar.innerHTML = "";  
  var table_title = title_tableMitarbeiter(datos);
  containerTopVar.appendChild(table_title);

  cargarTablaMitarbeiter(datos);  
}

function updateModalFields(data) {
  console.log("data", data);
  document.getElementById("dialogMitarbeiterTitle").textContent = "Edit Mitarbeiter";
  // Asegúrate de que 'data' es un objeto con las propiedades correctas
  document.getElementById("mitarbeiterId").textContent = data.ProjektID || "";
  document.getElementById("projektname").value = data.projektname || "";
  document.getElementById("projektkürzel").value = data.projektkürzel || "";
  document.getElementById("mitarbeiterditbeschreibung").value =
    data.beschreibung || "";
  document.getElementById("mitarbeiterditverant").value =
    data.verantwortlicher || "";
  // Para las fechas, necesitas convertir la fecha ISO a un formato que el input de tipo 'date' pueda entender
  var beginnDate = new Date(data.beginn);
  var beginnFormatted = beginnDate.toISOString().split("T")[0];
  document.getElementById("mitarbeiterditbeginn").value = beginnFormatted;

  document.getElementById("mitarbeiterditstatus").value = data.status || "";

  // Asumiendo que 'erstelt_am' es una fecha y quieres mostrarla en un formato legible
  var ersteltAm = new Date(data.erstellt_am);
  var erstelAmFormatted = ersteltAm.toISOString().split("T")[0];
  document.getElementById("mitarbeiterditerstelt").value = erstelAmFormatted || "";

 
  document.getElementById("mitarbeiterditerstellt").value =data.erstellt_von || "";

  document.getElementById("submitMitarbeiterButton").onclick = updateMitarbeiter;
  document.getElementById("submitMitarbeiterButton").value = "Edit";
}

function updateMitarbeiter() {
  // Capturar los valores del formulario
  var datosActualizados = {
    projektname: document.getElementById("projektname").value,
    projektkuerzel: document.getElementById("projektkürzel").value,
    beschreibung: document.getElementById("mitarbeiterditbeschreibung").value,
    verantwortlicher: document.getElementById("mitarbeiterditverant").value,
    beginn: document.getElementById("mitarbeiterditbeginn").value,
    status: document.getElementById("mitarbeiterditstatus").value,
    erstelt_am: document.getElementById("mitarbeiterditerstelt").value,
    erstellt_von: document.getElementById("mitarbeiterditerstellt").value,
    mitarbeiterId: document.getElementById("mitarbeiterId").textContent,
  };

  // Aquí deberías agregar el código para enviar estos datos al servidor
  // Esto podría ser una solicitud AJAX, fetch o el método que prefieras
  // Por ejemplo, usando fetch:
  fetch(`/api/mitarbeiter/update/${datosActualizados.mitarbeiterId}`, {
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
      loadMitarbeiter();
      $("#editMitarbeiterModal").modal("hide");
      


    })
    .catch((error) => {
      console.log(response);
      console.error("Error al actualizar los datos:", error);
    });
}
function addMitarbeiter() {
  var datosNuevos = {
    projektname: document.getElementById("projektname").value,
    projektkuerzel: document.getElementById("projektkürzel").value,
    beschreibung: document.getElementById("mitarbeiterditbeschreibung").value,
    verantwortlicher: document.getElementById("mitarbeiterditverant").value,
    beginn: document.getElementById("mitarbeiterditbeginn").value,
    status: document.getElementById("mitarbeiterditstatus").value,
    erstelt_am: document.getElementById("mitarbeiterditerstelt").value,
    erstellt_von: document.getElementById("mitarbeiterditerstellt").value
  };





  console.log("datosNuevos", datosNuevos);
  const url = `/api/mitarbeiter/add?`+ new URLSearchParams(datosNuevos);
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
      $("#editMitarbeiterModal").modal("hide");
    })
    
    .catch((error) => {
      console.log(response);
      console.error("Error al actualizar los datos:", error);
    });
}

function addModalFields() {
  document.getElementById("dialogMitarbeiterTitle").textContent = 'Add Mitarbeiter';
  document.getElementById("projektname").value = "";
  document.getElementById("projektkürzel").value =  "";
  document.getElementById("mitarbeiterditbeschreibung").value = "";
  document.getElementById("mitarbeiterditverant").value ="";
  document.getElementById("mitarbeiterditbeginn").value = "";
  document.getElementById("mitarbeiterditstatus").value =  "";
  document.getElementById("mitarbeiterditerstelt").value =  "";
  document.getElementById("mitarbeiterditerstellt").value = "";
  document.getElementById("submitMitarbeiterButton").onclick = addMitarbeiter;
  document.getElementById("submitMitarbeiterButton").value = "Hinzufügen";


}

function searchOnMitarbeiter(searchText) {
  if (!searchText) {
    fetch("/api/mitarbeiter")
      .then((response) => response.json())
      .then((datos) => {
        cargarTablaMitarbeiter(datos);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  } else {
    // Asegúrate de que 'searchText' es una cadena de texto válida
    const url = `/api/mitarbeiter/search?texto=${encodeURIComponent(searchText)}`;

    fetch(url)
      .then((response) => response.json())
      .then((datos) => {
        console.log("datos", datos);
        cargarTablaMitarbeiter(datos);
      })
      .catch((error) => {
        console.error("Error al realizar la búsqueda:", error);
      });
  }
}
function loadMitarbeiter(){

  fetch('/api/mitarbeiter')
  .then(response => response.json())
  .then(datos => {
    crearYMostrarTablaMitarbeiter(datos);
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
}
function guardarNuevoRegistro(btn) {
  var tr = btn.parentNode.parentNode;
  var celdas = tr.getElementsByTagName("td");
  var nuevoRegistro = {};
  for (var i = 0; i < celdas.length - 1; i++) {
    var input = celdas[i].getElementsByTagName("input")[0];
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

function loadCheckBox(teamLeaders) {
  console.log("teamLeaders", teamLeaders);
  const tabsContainer = document.getElementById("tabsConteiner");
  tabsContainer.innerHTML = "";
  const checkBoxList = document.createElement("ul");

  teamLeaders.forEach((name) => {
    const listItem = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.value = name.Teammitglieder;
    checkBox.innerHTML = name.Teammitglieder.innerHTML;
    console.log(name.Teammitglieder.innerText);
    listItem.innerText = name.Teammitglieder;
    const label = document.createElement("label");
    label.textContent = name;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    checkBoxList.appendChild(listItem);
  });

  tabsContainer.appendChild(checkBoxList);
}









$("#editMitarbeiterModal").on("hidden.bs.modal", function() {
console.log("se cerro el modal");
 loadMitarbeiter();
});

$("#editMitarbeiterModal").on("hide.bs.modal", function() {
  console.log("se cerro hide el modal");
  loadMitarbeiter();
});

function mitarbeiterTabs(datos){
  console.log("datos", datos);
  //document.getElementById('modalContent').textContent = JSON.stringify(datosObjeto, null, 2);
    // Abrimos el modal (esto depende de cómo estés manejando el modal en tu proyecto, aquí un ejemplo usando Bootstrap)
    $("#tabsMitarbeiter").modal('show');
}