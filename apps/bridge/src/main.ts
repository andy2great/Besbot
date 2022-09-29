import * as express from 'express';

import questionRoute from './app/question';

const app = express();
app.use(express.json());

app.use(questionRoute);

const port = process.env.port || 8083;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);