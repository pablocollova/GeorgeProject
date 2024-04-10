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
  