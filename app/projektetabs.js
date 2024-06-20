var id;
function leader() {
  var conteiner = document.getElementById('tabsConteiner');
  id = conteiner.textContent;

  var titulo = document.createElement('h2');
  titulo.textContent = 'Projekte';
  conteiner.appendChild(titulo);

  // Utilizando Promise.all para manejar múltiples promesas
  fetch(`/api/projekte/searchID/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(projekte => {
      console.log("Project data:", projekte);
      return Promise.all([
        Promise.resolve(projekte), // Incluimos los datos del proyecto
        searchMbyP(projekte.ProjektID), // Promesa para obtener empleados del proyecto
        fetchAllMitarbeiter() // Promesa para obtener todos los empleados
      ]);
    })
    .then(([projekte, projectMitarbeiters, allMitarbeiters]) => {
      console.log("Project Mitarbeiter data:", projectMitarbeiters);
      console.log("All Mitarbeiter data:", allMitarbeiters);
      displayEmployeeLists(projectMitarbeiters, allMitarbeiters);
    })
    .catch(error => {
      console.error("Error fetching project by ID:", error);
    });
}

function searchMbyP(projectId) {
  console.log("searchMbyP", projectId);
  return fetch(`/api/mitarbeiter/searchMbyP/${projectId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
}

function fetchAllMitarbeiter() {
  return fetch('/api/mitarbeiter')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
}

function searchMbyP(projectId) {
  console.log("searchMbyP", projectId);
  return fetch(`/api/mitarbeiter/searchMbyP/${projectId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
}

function fetchAllMitarbeiter() {
  return fetch('/api/mitarbeiter')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
}
function displayEmployeeLists(projectMitarbeiters, allMitarbeiters) {
  var conteiner = document.getElementById('tabsConteiner');
  conteiner.innerHTML = '';  // Limpiar contenido anterior

  var listsContainer = document.createElement('div');
  listsContainer.classList.add('lists-container');

  // Lista de empleados en el proyecto
  var projectEmployeesList = document.createElement('ul');
  projectEmployeesList.classList.add('employee-list');
  projectEmployeesList.id = 'projectEmployees';
  var projectEmployeesTitle = document.createElement('h3');
  projectEmployeesTitle.textContent = 'Empleados en el proyecto';
  listsContainer.appendChild(projectEmployeesTitle);
  listsContainer.appendChild(projectEmployeesList);

  // Lista de empleados fuera del proyecto
  var otherEmployeesList = document.createElement('ul');
  otherEmployeesList.classList.add('employee-list');
  otherEmployeesList.id = 'otherEmployees';
  var otherEmployeesTitle = document.createElement('h3');
  otherEmployeesTitle.textContent = 'Otros empleados';
  listsContainer.appendChild(otherEmployeesTitle);
  listsContainer.appendChild(otherEmployeesList);

  // Añadir empleados a las listas correspondientes
  var projectEmployeeIds = new Set(projectMitarbeiters.map(emp => emp.MitarbeiterID));

  // Empleados en el proyecto
  projectMitarbeiters.forEach(emp => {
    var listItem = document.createElement('li');
    listItem.textContent = emp.Name;
    listItem.dataset.employeeId = emp.MitarbeiterID;
    listItem.draggable = true;
    listItem.addEventListener('dragstart', handleDragStart);
    listItem.addEventListener('dragover', handleDragOver);
    listItem.addEventListener('drop', handleDrop);

    projectEmployeesList.appendChild(listItem);
  });

  // Empleados fuera del proyecto
  allMitarbeiters.forEach(emp => {
    if (!projectEmployeeIds.has(emp.MitarbeiterID)) {
      var listItem = document.createElement('li');
      listItem.textContent = emp.Name;
      listItem.dataset.employeeId = emp.MitarbeiterID;
      listItem.draggable = true;
      listItem.addEventListener('dragstart', handleDragStart);
      listItem.addEventListener('dragover', handleDragOver);
      listItem.addEventListener('drop', handleDrop);

      otherEmployeesList.appendChild(listItem);
    }
  });

  conteiner.appendChild(listsContainer);
}

function handleDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.dataset.employeeId);
  e.dropEffect = 'move';
}

function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
}

function handleDrop(e) {
  e.preventDefault();
  var employeeId = e.dataTransfer.getData('text/plain');
  var draggedItem = document.querySelector(`[data-employeeId="${employeeId}"]`);
  if (draggedItem && e.target.closest('ul')) {
    e.target.closest('ul').appendChild(draggedItem);
  }
}

function saveEmployeeAssignments(projectId) {
  var projectEmployees = Array.from(document.getElementById('projectEmployees').children).map(item => item.dataset.employeeId);
  var otherEmployees = Array.from(document.getElementById('otherEmployees').children).map(item => item.dataset.employeeId);

  fetch(`/api/mitarbeiterProjekte/updateAssignments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      projectId: projectId,
      projectEmployees: projectEmployees,
      otherEmployees: otherEmployees
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Employee assignments updated:", data);
  })
  .catch(error => {
    console.error("Error updating employee assignments:", error);
  });
}



function handleDragStart(e) {
  // Solo permitir arrastrar si el objetivo es un elemento de la lista
  if (e.target.tagName === 'LI') {
    e.dataTransfer.setData('text/plain', e.target.dataset.employeeId);
    e.dropEffect = 'move';
  }
}

function handleDragOver(e) {
  // Solo permitir arrastrar si el objetivo es un elemento de la lista
  if (e.target.tagName === 'LI') {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }
}

function handleDrop(e) {
  // Solo permitir soltar si el objetivo es un elemento de la lista
  if (e.target.tagName === 'LI') {
    e.preventDefault();
    var employeeId = e.dataTransfer.getData('text/plain');
    var draggedItem = document.querySelector(`[data-employeeId="${employeeId}"]`);
    if (draggedItem) {
      if (e.target.tagName === 'LI') {
        e.target.closest('ul').appendChild(draggedItem);
      } else if (e.target.tagName === 'UL') {
        e.target.appendChild(draggedItem);
      }
    }
  }
}
function leistungsphasen() {
  // Crear el contenido inicial de la vista con el botón de agregar
  let projectHtml = `
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Leistungsphasen</h2>
      <button class="btn btn-primary" data-toggle="modal" data-target="#addModal">
        <i class="fas fa-plus"></i> Agregar Nuevo Hito
      </button>
    </div>
    <div id="notification" class="mb-4"></div>
    <div id="leistungsphasen-container"></div>
  `;

  // Insertar el contenido inicial en el contenedor
  $('#tabsConteiner').html(projectHtml);

  // Mostrar mensaje de carga
  $('#notification').html('<div class="alert alert-info">Cargando hitos...</div>');

  // Hacer la solicitud AJAX para obtener los datos
  const projektId = 1; // Cambiar según sea necesario

  $.ajax({
    url: `/api/leistungsphasen/${projektId}`,
    method: 'GET',
    success: function(data) {
      if (data.length > 0) {
        let itemsHtml = '';

        data.forEach(item => {
          itemsHtml += `
            <div class="card mt-4">
              <div class="card-header">
                <i class="fas fa-project-diagram"></i> ${item.Projektname}
              </div>
              <div class="card-body">
                <h5 class="card-title"><i class="fas fa-info-circle icon"></i>Detalles del Proyecto</h5>
                <div class="row">
                  <div class="col-md-6 project-detail"><strong>ID:</strong> ${item.ProjektID}</div>
                  <div class="col-md-6 project-detail"><strong>Nombre:</strong> ${item.Projektname}</div>
                  <div class="col-md-12 project-detail"><strong>Descripción:</strong> ${item.Beschreibung}</div>
                  <div class="col-md-6 project-detail"><strong>Responsable:</strong> ${item.Verantwortlicher}</div>
                  <div class="col-md-6 project-detail"><strong>Fecha de Inicio:</strong> ${item.Beginn}</div>
                  <div class="col-md-6 project-detail"><strong>Estado:</strong> ${item.Status}</div>
                  <div class="col-md-6 project-detail"><strong>Creado por:</strong> ${item.Erstellt_von}</div>
                  <div class="col-md-6 project-detail"><strong>Fecha de Creación:</strong> ${item.Erstellt_am}</div>
                  <div class="col-md-6 project-detail"><strong>Última Modificación:</strong> ${item.Geaendert_am}</div>
                </div>

                <div class="project-calculations">
                  <h5><i class="fas fa-calculator icon"></i>Cálculos del Proyecto</h5>
                  <div class="row">
                    <div class="col-md-6 project-detail"><strong>Stundenkontingent Soll Prozent:</strong> ${item.Stundenkontingent_Soll_Prozent}%</div>
                    <div class="col-md-6 project-detail"><strong>Stundenkontingent Soll in "h":</strong> ${item.Stundenkontingent_Soll_H} horas</div>
                    <div class="col-md-6 project-detail"><strong>Budget Soll:</strong> ${item.Budget_Soll} €</div>
                    <div class="col-md-6 project-detail"><strong>Stundenkontingent Ist:</strong> ${item.Stundenkontingent_Ist} horas</div>
                    <div class="col-md-6 project-detail"><strong>Budget Ist:</strong> ${item.Budget_Ist} €</div>
                    <div class="col-md-6 project-detail"><strong>LP Übrige Stunden:</strong> ${item.Uebrige_Stunden_Leistungsphase} horas</div>
                  </div>
                </div>
              </div>
            </div>
          `;
        });

        // Insertar los ítems obtenidos
        $('#leistungsphasen-container').html(itemsHtml);
        // Limpiar notificaciones
        $('#notification').html('');
      } else {
        // Mostrar mensaje de que no se encontraron datos
        $('#notification').html('<div class="alert alert-warning">No hay hitos para este proyecto. Agrega uno nuevo.</div>');
        $('#leistungsphasen-container').html('');
      }
    },
    error: function(err) {
      console.error(err);
      // Mostrar mensaje de error
      $('#notification').html('<div class="alert alert-danger" role="alert">Error al cargar los detalles del proyecto.</div>');
    }
  });
}

function addNewHito() {
  const newHito = {
    projektname: $('#projektname').val(),
    beschreibung: $('#beschreibung').val(),
    verantwortlicher: $('#verantwortlicher').val(),
    faelligkeit: $('#faelligkeit').val(),
    projektId: 1 // Asegúrate de que este campo está presente
    // Añadir más campos según sea necesario
  };

  $.ajax({
    url: '/api/leistungsphasen',
    method: 'POST',
    data: newHito,
    success: function(response) {
      $('#addModal').modal('hide');
      leistungsphasen(); // Recargar los detalles del proyecto
    },
    error: function(err) {
      console.error(err);
      alert('Error al agregar el nuevo hito.');
    }
  });
}

// Asociar el formulario de agregar nuevo hito al método de envío
$(document).ready(function() {
  $('#addHitoForm').on('submit', function(event) {
    event.preventDefault();
    addNewHito();
  });
});
