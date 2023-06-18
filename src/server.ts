import { bootStrap } from './utilities/bootStrap'
import { Server } from 'http'
let server: Server

process.on('uncaughtException', error => {
  console.log(error)
  process.exit(1)
})

bootStrap()

process.on('SIGTERM', () => {
  console.log(`Sigterm is received`)
  if (server) {
    server.close()
  }
})
