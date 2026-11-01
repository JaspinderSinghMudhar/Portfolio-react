const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors())

const { MongoClient } = require('mongodb');
const DB_URL = process.env.DB_URL;
const requiredEnv = ['DB_URL', 'DB_NAME', 'DB_COLLECTION_P', 'DB_COLLECTION_F'];
const missingEnv = requiredEnv.filter((name) => !process.env[name]);
if (missingEnv.length > 0) {
  throw new Error(`Missing required environment variables: ${missingEnv.join(', ')}`);
}
const client = new MongoClient(DB_URL)
const database = () => client.db(process.env.DB_NAME);
const projectCollection = () => database().collection(process.env.DB_COLLECTION_P);
const formCollection = () => database().collection(process.env.DB_COLLECTION_F);

const PORT = process.env.PORT || 3000;

app.get('/api/projects', async (req, res) => {
  const data = await projectCollection().find().toArray();
  res.json(data)
})

app.get('/api/project', async (req, res) => {
  const data_ID = req.query.id;
  const data = await projectCollection().findOne({ id: Number(data_ID) })
  res.json(data)
})

app.post('/api/form', async (req, res) => {
  await formCollection().insertOne(req.body)
  res.send('Form Submited')
})

// ONLY serve the static React build files if running in Production
if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, 'Portfolio', 'dist');
  app.use(express.static(distPath));

  app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.use((error, req, res, next) => {
  console.error('Request failed:', error);
  if (res.headersSent) {
    return next(error);
  }
  res.status(500).json({ error: 'Internal server error' });
});

async function startServer() {
  await client.connect();
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
}

startServer().catch((error) => {
  console.error('Failed to connect to MongoDB or start the server:', error);
  process.exit(1);
});