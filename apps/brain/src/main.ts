import { MQTTClient, TCPClient } from '@besbot/helpers'
import * as express from 'express'

import { AppConfigs } from '../../config'

MQTTClient.getInstance().connect('mqtt://localhost:1883')
const app = express()

app.use(express.json())

app.listen(AppConfigs.brain.port, () => {
  console.log(`Listening at http://localhost:${AppConfigs.brain.port}/`)
})

MQTTClient.getInstance().listen('beslogic/mouth/say', message => {
  TCPClient.getInstance().send(AppConfigs.mouth.port, AppConfigs.mouth.name, {
    destination: 'say',
    message,
  })
})
