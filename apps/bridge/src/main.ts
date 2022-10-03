import * as express from 'express';
import * as mqtt from 'mqtt';

import questionRoute from './app/question';

const app = express();
app.use(express.json());

app.use(questionRoute);

const port = process.env.port || 8083;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);


const client  = mqtt.connect('mqtt://localhost:1883', {
  username: 'beslogic',
  password: 'Beslogic#123456'
})

client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
      client.publish('presence', 'Hello mqtt')
      client.publish('presence', 'Hello mqtt')
    }

    console.log(err)
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic, message.toString())
  client.end()
})