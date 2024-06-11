function leader() {
  var conteiner= document.getElementById('tabsConteiner');
  var id=conteiner.textContent;

  
  var titulo = document.createElement('h2');
    titulo.textContent = 'Projekte';
    conteiner.appendChild(titulo);
   
  var projekte;
  var mitarbeiters
  fetch(`/api/projekte/searchID/${id}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(projekte => {
    console.log("Project data:", projekte);
    console.log(projekte,"desde leadedddd2r");
    // Aquí puedes llamar a una función para mostrar los datos en el modal
   mitarbeiters=searchMbyP(projekte.ProjektID);
console.log(mitarbeiters);
  })
  .catch(error => {
    console.error("Error fetching project by ID:", error);
  });

 
}

function searchMbyP(projectId) {
  console.log("searchMbyP",projectId);
  var return_mitarbeiters;
   fetch(`/api/mitarbeiter/searchMbyP/${projectId}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
.then(mitarbeiters => {
    console.log("Mitarbeiter data:", mitarbeiters);
    return_mitarbeiters= mitarbeiters;
  })
  .catch(error => {
    console.error("Error fetching project by ID:", error);
  });
  return return_mitarbeiters;
}