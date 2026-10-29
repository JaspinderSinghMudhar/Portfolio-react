const express = require('express');
const app = express();

const path = require('path');

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
    .findOne({ id: Number(data_ID) })
  res.json(data)
})


// ONLY serve the static React build files if running in Production
if (process.env.NODE_ENV === 'production') {
const distPath = path.join(__dirname, 'Portfolio', 'dist');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(distPath));

  app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}
}




app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})