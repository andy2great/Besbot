import * as express from 'express';

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  const result = await fetch('http://besbox-mouth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: 'Hey this is a2g' })
  });

  res.send(result);
});

const port = process.env.port || 8080;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});