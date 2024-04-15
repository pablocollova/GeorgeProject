const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const dbConfig = require('./config/db.config');

// Inicializar express
const app = express();

// Configurar morgan para registrar todas las solicitudes
app.use(morgan('dev'));

// Configurar body-parser para manejar los cuerpos de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar la carpeta pública para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Crear conexión a la base de datos
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// Conectar a la base de datos
connection.connect(error => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');
});

// Aquí puedes configurar tus rutas y middleware
// Por ejemplo, si tienes un archivo de rutas para 'kontaktes'
const kontakteRoutes = require('./routes/kontakte.routes');
app.use('/api/kontakte', kontakteRoutes);

// Configurar una ruta para servir index.html
app.get('/api/kontakte', (req, res) => {
    // Lógica para obtener datos de la base de datos y enviarlos como respuesta.
    // Por ejemplo, podrías hacer una consulta SQL y devolver los resultados en formato JSON.
    res.json({ mensaje: "Datos obtenidos con éxito" });
  });

// Setup app folders.
app.use(express.static('app'));

// Set up a route for index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto ${PORT}...`);
});


/*const express = require('express');
const morgan = require('morgan');
const path = require('path');

const DEFAULT_PORT = process.env.PORT || 5500;

// initialize express.
const app = express();

// Initialize variables.
let port = DEFAULT_PORT;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Setup app folders.
app.use(express.static('app'));

// Set up a route for index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Start the server.
app.listen(port);
console.log(`Listening on port ${port}...`);
*/