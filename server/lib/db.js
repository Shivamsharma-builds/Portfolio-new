import mongoose from 'mongoose'

let connectionPromise = null

export async function connectDatabase() {
  if (mongoose.connection.readyState === 1) return mongoose.connection

  const mongoUri = process.env.MONGODB_URI
  if (!mongoUri || mongoUri.includes('<db_password>')) {
    throw new Error('MONGODB_URI is not configured.')
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(mongoUri, {
      dbName: process.env.MONGODB_DB_NAME || 'portfolio',
      serverSelectionTimeoutMS: 10000,
      maxPoolSize: 10,
      minPoolSize: 0,
      bufferCommands: false,
    }).catch((error) => {
      connectionPromise = null
      throw error
    })
  }

  await connectionPromise
  return mongoose.connection
}
