import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Welcome to bridge!' });
});

export default router;