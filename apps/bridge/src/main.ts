import * as express from 'express';
import { MQTTClient } from '@besbot/helpers';

import questionRoute from './app/routers/question';

MQTTClient.getInstance().connect('mqtt://localhost:1883', 'beslogic', 'Beslogic#123456');
const app = express();
app.use(express.json());

app.use(questionRoute);

const port = process.env.port || 8083;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);


MQTTClient.getInstance().listen('presence', (message) => {
  console.log(message)
})