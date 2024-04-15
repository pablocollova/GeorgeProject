const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const dbConfig = require('./config/db.config');

console.log('server');
// Inicializar express
const app = express();

// Configurar morgan para registrar todas las solicitudes
app.use(morgan('dev'));

// Configurar body-parser para manejar los cuerpos de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar la carpeta pública para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


// Configurar tus rutas y middleware
const kontakteRoutes = require('./routes/kontakte.routes');
app.use('/api/kontakte', kontakteRoutes);

// Setup app folders.
app.use(express.static('app'));

// Set up a route for index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 5501;
app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto ${PORT}...`);
});
