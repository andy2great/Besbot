export const AppHosts = {
  brain: process.env.host_brain || 'localhost:8083',
  ears: process.env.host_ears || 'localhost:8082',
  mouth: process.env.host_mouth || 'localhost:8081',
  version: process.env.host_version || 'localhost',
}