import type { MqttClient } from 'mqtt'
import * as mqtt from 'mqtt'

export class MQTTClient {
  private static _instance: MQTTClient | undefined

  private mqttClient: MqttClient | undefined

  static getInstance = () => {
    if (this._instance) {
      return this._instance
    }

    this._instance = new MQTTClient()
    return this._instance
  }

  connect = (url: string, username?: string, password?: string) => {
    this.mqttClient = mqtt.connect(url, {
      username,
      password,
    })

    this.mqttClient.on('connect', () => {
      console.log('connected')
    })
  }

  notify = (topic: string, message: string) => {
    if (!this.mqttClient) return

    this.mqttClient.subscribe(topic)
    this.mqttClient.publish(topic, message)
  }

  listen = (listenTopic: string, callback: (message: string) => void) => {
    if (!this.mqttClient) return

    this.mqttClient.subscribe(listenTopic)
    this.mqttClient.on('message', (topic, message) => {
      if (listenTopic !== topic) return
      callback(message.toString())
    })
  }
}
