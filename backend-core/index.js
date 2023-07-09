const http = require('http');
const app = require('./app.js');
const server = http.createServer(app);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Q APP CORE SERVER RUNNNIG AT PORT ${PORT}`);
});
