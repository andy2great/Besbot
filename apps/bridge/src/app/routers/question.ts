import { MQTTClient } from '@besbot/helpers'
import * as express from 'express'

import { MqttTopics } from '../../../../mqtt-config'

const router = express.Router()

router.get('*', (req, res) => {
  MQTTClient.getInstance().notify(MqttTopics.ears.say, req.path.toString())
  res.send({ message: 'Welcome to bridge!' })
})

export default router
