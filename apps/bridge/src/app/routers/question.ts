import * as express from 'express';
import { MQTTClient } from '@besbot/helpers';

const router = express.Router();

router.get('*', (req, res) => {
  MQTTClient.getInstance().notify('beslogic/mouth/say', req.path.toString())
  res.send({ message: 'Welcome to bridge!' });
});



export default router;