const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/r', (req, res) => {
  res.send('Rup2!')
})
app.get('/hi', (req, res) => {
  res.send('Hiii!')
})

app.listen(port, () => {
  console.log(`Example app listening at  http://localhost:${port}`)
})