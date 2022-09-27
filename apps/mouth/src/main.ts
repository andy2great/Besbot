import say = require('say');
import * as express from 'express';

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  say.speak(req.body.text)
  res.send(null)
});

const port = process.env.port || 8081;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});

say.getInstalledVoices(console.log)
console.log('ok')