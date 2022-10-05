import { speak, TCPClient } from '@besbot/helpers'

const DEFAULT_PORT = 8081
const port = Number(process.env.port) || DEFAULT_PORT

const tcpClient = TCPClient.getInstance()
tcpClient.connect(port)
tcpClient.listen({
  destination: 'say',
  callback: speak,
})
