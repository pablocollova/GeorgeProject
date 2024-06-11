function loadProjekte(datos) {
    var contenedor = document.getElementById("tabla-container");
    contenedor.innerHTML = "";
    datos.forEach(function (objeto, index) {
      var projectBoxWrapper = document.createElement("div");
      projectBoxWrapper.className = "project-box-wrapper";
      var projectBox = document.createElement("div");
      projectBox.className = "project-box";
      projectBox.style.backgroundColor = getBackgroundColor(objeto.Status); // Función para determinar el color de fondo según el estado
      projectBox.dataset.index = index;
  
      projectBox.innerHTML = `
        <div class="project-box-header">
          <span>${formatDate(objeto.Beginn)}</span>
          <div class="more-wrapper">
            <button class="project-btn-more">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </button>
          </div>
        </div>
        <div class="project-box-content-header">
          <p class="box-content-header">${objeto.Projektname}</p>
          <p class="box-content-subheader">${objeto.Projektkurzel}</p>
        </div>
        <div class="box-progress-wrapper">
          <p class="box-progress-header">Progress</p>
          <div class="box-progress-bar">
            <span class="box-progress" style="width: ${getProgress(objeto.Status)}%; background-color: ${getProgressColor(objeto.Status)}"></span>
          </div>
          <p class="box-progress-percentage">${getProgress(objeto.Status)}%</p>
        </div>
        <div class="project-box-footer">
          <div class="participants">
            <img src="participant1.jpg" alt="participant">
            <img src="participant2.jpg" alt="participant">
            <button class="add-participant" style="color: ${getProgressColor(objeto.Status)};">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                <path d="M12 5v14M5 12h14"></path>
              </svg>
            </button>
          </div>
          <div class="days-left" style="color: ${getProgressColor(objeto.Status)};">
            ${calculateDaysLeft(objeto.Faelligkeit)} Days Left
          </div>
        </div>
      `;
  
      projectBox.addEventListener('dblclick', function () {
        projekteTabs(datos[this.dataset.index]);
      });
  
      projectBoxWrapper.appendChild(projectBox);
      contenedor.appendChild(projectBoxWrapper);
    });
  }
  
  function formatDate(date) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }
  
  function getBackgroundColor(status) {
    switch (status) {
      case 'In Progress': return '#fee4cb';
      case 'Upcoming': return '#e9e7fd';
      case 'Completed': return '#c8f7dc';
      default: return '#d5deff';
    }
  }
  
  function getProgress(status) {
    switch (status) {
      case 'In Progress': return 60;
      case 'Upcoming': return 50;
      case 'Completed': return 100;
      default: return 0;
    }
  }
  
  function getProgressColor(status) {
    switch (status) {
      case 'In Progress': return '#ff942e';
      case 'Upcoming': return '#4f3ff0';
      case 'Completed': return '#34c471';
      default: return '#4067f9';
    }
  }
  
  function calculateDaysLeft(faelligkeit) {
    var now = new Date();
    var dueDate = new Date(faelligkeit);
    var timeDiff = dueDate.getTime() - now.getTime();
    var dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return dayDiff;
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    loadProjekte();
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');
  
    modeSwitch.addEventListener('click', function () {
      document.documentElement.classList.toggle('dark');
      modeSwitch.classList.toggle('active');
    });
  
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');
  
    listView.addEventListener('click', function () {
      gridView.classList.remove('active');
      listView.classList.add('active');
      projectsList.classList.remove('jsGridView');
      projectsList.classList.add('jsListView');
    });
  
    gridView.addEventListener('click', function () {
      gridView.classList.add('active');
      listView.classList.remove('active');
      projectsList.classList.remove('jsListView');
      projectsList.classList.add('jsGridView');
    });
  
    document.querySelector('.messages-btn').addEventListener('click', function () {
      document.querySelector('.messages-section').classList.add('show');
    });
  
    document.querySelector('.messages-close').addEventListener('click', function () {
      document.querySelector('.messages-section').classList.remove('show');
    });
  
    projectsList.addEventListener('mouseover', function (e) {
      if (e.target.closest('.project-box')) {
        e.target.closest('.project-box').style.transform = 'scale(1.05)';
        e.target.closest('.project-box').style.transition = 'transform 0.2s';
      }
    });
  
    projectsList.addEventListener('mouseout', function (e) {
      if (e.target.closest('.project-box')) {
        e.target.closest('.project-box').style.transform = 'scale(1)';
      }
    });
  });
  