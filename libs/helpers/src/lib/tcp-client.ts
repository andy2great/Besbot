import * as net from 'node:net'

export interface SocketPublisher {
  message: string
  destination: string
}

export interface SocketListener {
  destination: string
  callback: (message: string) => void
}

export class TCPClient {
  private static _instance: TCPClient | undefined

  server: net.Server | undefined
  listeners: SocketListener[] = []

  static getInstance = () => {
    if (this._instance) {
      return this._instance
    }

    this._instance = new TCPClient()
    return this._instance
  }

  connect = (port: number) => {
    this.server = net.createServer(this.onClientConnection)
    this.server.listen(port, () => {
      console.log(`Server started on port ${port}`)
    })

    return TCPClient
  }

  listen = (listener: SocketListener) => {
    this.listeners.push(listener)
  }

  send = (port: number, address: string, info: SocketPublisher) => {
    const client = new net.Socket()

    client.connect(port, address, () => {
      client.write(JSON.stringify(info))
      client.end()
    })
  }

  private readonly onClientConnection = (sock: net.Socket) => {
    sock.on('data', data => {
      const json = JSON.parse(data.toString()) as SocketPublisher

      const destinations = this.listeners.filter(listener => listener.destination === json.destination)
      for (const destination of destinations) destination.callback(json.message)
    })

    const serverResp = 'ok'
    sock.write(serverResp)
    sock.end()
  }
}
