import * as express from 'express';
import { speak } from '@besbot/helpers';

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  const text = req.body.text.toString();
  speak(text)
  res.send(null);
});

const port = process.env.port || 8081;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});