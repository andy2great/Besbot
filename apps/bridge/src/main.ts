import { MQTTClient } from '@besbot/helpers'
import * as express from 'express'

import { AppConfigs } from '../../config'
import questionRoute from './app/routers/question'

MQTTClient.getInstance().connect('mqtt://mqtt.genparker.com:1883', 'beslogic', 'Beslogic#123456')
const app = express()
app.use(express.json())

app.use(questionRoute)

app.listen(AppConfigs.bridge.port, () => {
  console.log(`Listening at http://localhost:${AppConfigs.bridge.port}/`)
})
