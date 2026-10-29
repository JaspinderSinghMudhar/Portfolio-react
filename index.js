const express = require('express');
const app = express();

// Cross API connection
const cors = require('cors');
app.use(cors())

// DB Connect
const {mongoClint} = require('mongodb');


const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  console.log(path.join(__dirname, 'projects.json'))
})

app.listen(8080, () => {
  console.log(`listening on port ${PORT}`)
})