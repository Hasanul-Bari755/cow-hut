/* eslint-disable no-console */
import mongoose from 'mongoose'
import config from '../config'
import app from '../app'
import { Server } from 'http'
let server: Server

export async function bootStrap() {
  try {
    await mongoose.connect(config.db_uri as string)
    server = app.listen(config.port, (): void => {
      console.log(
        `==== ✌️  Your server is running on http://localhost:${config.port} ====`
      )
    })
    console.log(`==== ✌️  DB Connection is succesfully ====`)
  } catch (error) {
    console.log(`==== 🤞  Database Connection Error ====`, error)
  }

  process.on('unhandledRejection', error => {
    console.log(error)
    if (server) {
      server.close(() => {
        console.log(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
