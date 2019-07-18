import http from 'http';
import config from './config';

const server = http.createServer((req, res) => {
  res.end('Funcionando haahahha!!');
  console.log("Console");
});

server.listen(config.port, config.hostname, () => { //function () {
  console.log(`Server running on http://${config.hostname}:${config.port}/`);
});