import { MQTTClient } from '@besbot/helpers'
import * as express from 'express'

const router = express.Router()

router.get('*', (req, res) => {
  MQTTClient.getInstance().notify('beslogic/mouth/say', req.query.text?.toString() ?? 'Nothing found')
  res.send({ message: 'Welcome to bridge!' })
})

export default router
