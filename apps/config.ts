export const AppConfigs = {
  brain: {
    name: process.env.host_brain || 'localhost',
    port: process.env.host_brain ? 80 : 8080
  },
  ears: {
    name: process.env.host_ears || 'localhost',
    port: process.env.host_ears ? 80 : 8082
  },
  mouth: {
    name: process.env.host_mouth || 'localhost',
    port: process.env.host_mouth ? 80 : 8081
  },
  version: {
    name: process.env.host_version || 'localhost',
    port: process.env.host_version ? 80 : 80
  },
  bridge: {
    name: process.env.host_bridge || 'localhost',
    port: process.env.host_bridge ? 80 : 8083
  }
}
