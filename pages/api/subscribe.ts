import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url'

let cachedDB: Db = null

async function connectToDatabase(uri) {
  if (cachedDB) {
    return cachedDB
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const databaseName = url.parse(uri).pathname.substr(1)

  const db = client.db(databaseName)

  cachedDB = db

  return db
}

export default async (request: NowRequest, response: NowResponse) => {
  const { email } = request.body

  const db = await connectToDatabase(process.env.MONGODB_URI)

  const collection = db.collection('subscribers')

  collection.insertOne({
    email,
    subscribedAt: new Date()
  })

  return response.status(201).json({ ok: true })
}