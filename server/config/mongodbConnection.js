const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = process.env.URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

let db
async function connection(){
  try {
    await client.connect()
    db = client.db("booksearch")
  } catch (error) {
    throw error
  }
}


function getDB(){
  return db
}

module.exports = { connection, getDB }