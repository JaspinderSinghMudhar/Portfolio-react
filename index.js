const express = require('express');
const app = express();

// Cross API connection
const cors = require('cors');
app.use(cors())

// DB Connect
const { MongoClient } = require('mongodb');
const DB_URL = process.env.DB_URL;
const client = new MongoClient(DB_URL)


const PORT = process.env.PORT || 3000;

app.get('/projects', async (req, res) => {
  await client.connect();
  const data = await client.db(process.env.DB_NAME)
    .collection(process.env.DB_COLLECTION_P)
    .find()
    .toArray();
  res.json(data)
})

app.get('/project', async (req, res) => {
  const data_ID = req.query.id;
  await client.connect();
  const data = await client.db(process.env.DB_NAME)
    .collection(process.env.DB_COLLECTION_P)
    .findOne({id:Number(data_ID)})
  res.json(data)
})



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})