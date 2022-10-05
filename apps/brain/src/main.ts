import { MQTTClient, TCPClient } from '@besbot/helpers'
import * as express from 'express'

import { AppHosts } from '../../config'

MQTTClient.getInstance().connect('mqtt://localhost:1883')
const app = express()

app.use(express.json())

const DEFAULT_PORT = 8080
const port = process.env.port ?? DEFAULT_PORT
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`)
})

MQTTClient.getInstance().listen('beslogic/mouth/say', message => {
  console.log('received mqtt message')
  TCPClient.getInstance().send(8081, 'localhost', {
    destination: 'say',
    message,
  })
})
