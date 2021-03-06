/*
 *   App entry point.
 *   Hace un import la aplicación desde el archivo
 *   app.js, luego inicia la aplicación.
 */

const config = require('./utils/config');
const http = require('http');
const app = require('./app');

const server = http.createServer(app);
server.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});
