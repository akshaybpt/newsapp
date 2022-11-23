const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');
connectToMongo();

const app = express()
const port = 7000

app.use(cors())
app.use(express.json())


app.use('/api/auth', require('./routes/auth'))
app.use('/api/news', require('./routes/news'))



app.listen(port, () => {
  console.log(`Notebook app listening on port ${port}`)
})