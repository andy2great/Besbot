import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send(process.env['VERSION'] || ':)');
});

const port = process.env.port || 8080;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);
