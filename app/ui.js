
//const kontaktemenu= document.getElementById("projektemenu");
var usernamee = "";

// Seleccionar el botón que activará el menú desplegable
var dropdownToggle = document.getElementById('menut');

// Seleccionar el menú desplegable
var dropdownMenu = document.getElementById('desp');

// Agregar un evento clic al botón para alternar la visibilidad del menú desplegable
dropdownToggle.addEventListener('click', function() {
    // Alternar la clase 'show' en el menú desplegable para mostrarlo u ocultarlo
    dropdownMenu.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function() {
  // Eventos de inicio y cierre de sesión
 // document.getElementById('signIn').addEventListener('click', signIn);
 // document.getElementById('signOut').addEventListener('click', signOut);

  // Inicialización
  selectAccount();
});

function showWelcomeMessage(username) {
  usernamee= username;
  const welcomeMessageDiv = document.getElementById('userLabel');
  welcomeMessageDiv.textContent = `Bienvenido, ${username}`;
  welcomeMessageDiv.classList.remove('hide');
}
function projekteclick(){
  console.log("click"); 

}
function updateUI(data, endpoint) {
  // Actualiza la interfaz de usuario con los datos del perfil o correo
  const profileContentDiv = document.getElementById('profileContent');
  profileContentDiv.textContent = JSON.stringify(data, null, 2);

  console.log('Graph API responded at: ' + new Date().toString());

  if (endpoint === graphConfig.graphMeEndpoint) {
      profileDiv.innerHTML = ''
      const title = document.createElement('p');
      title.innerHTML = "<strong>Title: </strong>" + data.jobTitle;
      const email = document.createElement('p');
      userEmail.innerHTML = "<strong>Mail: </strong>" + usernamee;//data.mail;
      const phone = document.createElement('p');
      phone.innerHTML = "<strong>Phone: </strong>" + data.businessPhones[0];
      const address = document.createElement('p');
      address.innerHTML = "<strong>Location: </strong>" + data.officeLocation;
      profileDiv.appendChild(title);
      profileDiv.appendChild(email);
      profileDiv.appendChild(phone);
      profileDiv.appendChild(address);

           // Actualiza el correo electrónico en el menú desplegable
         document.getElementById('userEmail').textContent ="usernamee";



  } else if (endpoint === graphConfig.graphMailEndpoint) {
      if (!data.value) {
          alert("You do not have a mailbox!")
      } else if (data.value.length < 1) {
          alert("Your mailbox is empty!")
      } else {
          const tabContent = document.getElementById("nav-tabContent");
          const tabList = document.getElementById("list-tab");
          tabList.innerHTML = ''; // clear tabList at each readMail call

          data.value.map((d, i) => {
              // Keeping it simple
              if (i < 10) {
                  const listItem = document.createElement("a");
                  listItem.setAttribute("class", "list-group-item list-group-item-action")
                  listItem.setAttribute("id", "list" + i + "list")
                  listItem.setAttribute("data-toggle", "list")
                  listItem.setAttribute("href", "#list" + i)
                  listItem.setAttribute("role", "tab")
                  listItem.setAttribute("aria-controls", i)
                  listItem.innerHTML = d.subject;
                  tabList.appendChild(listItem)

                  const contentItem = document.createElement("div");
                  contentItem.setAttribute("class", "tab-pane fade")
                  contentItem.setAttribute("id", "list" + i)
                  contentItem.setAttribute("role", "tabpanel")
                  contentItem.setAttribute("aria-labelledby", "list" + i + "list")
                  contentItem.innerHTML = "<strong> from: " + d.from.emailAddress.address + "</strong><br><br>" + d.bodyPreview + "...";
                  tabContent.appendChild(contentItem);
              }
          });
      }
  }
}

function updateUserName(username) {
  // Actualiza la interfaz de usuario con el nombre de usuario
  const signInButton = document.getElementById('signInButton');
  const signOutButton = document.getElementById('signOutButton');
  signInButton.classList.add('hide');
  signOutButton.classList.remove('hide');
  showWelcomeMessage(username);
}



function loadKontakte() 
   {

    document.getElementById('tableName').innerText = 'Kontakte';
    fetch('/api/kontakte')
      .then(response => response.json())
      .then(datos => {
        crearYMostrarTabla(datos);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
      
  };


  function loadStuden() 
   {

    document.getElementById('tableName').innerText = 'Stundenerfassung';
    fetch('/api/stundenerfassung')
      .then(response => response.json())
      .then(datos => {
        crearYMostrarTabla(datos);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
      
  };
