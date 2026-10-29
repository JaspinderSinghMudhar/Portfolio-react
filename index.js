const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cross API connection
const cors = require('cors');
app.use(cors())

// DB Connect
const { MongoClient } = require('mongodb');
const DB_URL = process.env.DB_URL;
if (!DB_URL) {
  throw new Error('DB_URL is missing. Add it to the root .env file or set it in the server environment.');
}
const client = new MongoClient(DB_URL)


const PORT = process.env.PORT || 3000;

app.get('/api/projects', async (req, res) => {
  await client.connect();
  const data = await client.db(process.env.DB_NAME)
    .collection(process.env.DB_COLLECTION_P)
    .find()
    .toArray();
  res.json(data)
})

app.get('/api/project', async (req, res) => {
  const data_ID = req.query.id;
  await client.connect();
  const data = await client.db(process.env.DB_NAME)
    .collection(process.env.DB_COLLECTION_P)
    .findOne({ id: Number(data_ID) })
  res.json(data)
})




// Form Code


app.post('/api/form', async (req , res) =>{
  await client.connect();
  const form = await client.db(process.env.DB_NAME)
  .collection(process.env.DB_COLLECTION_F)
  .insertOne(req.body)
  console.log(req.body)
  res.send('Form Submited')
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