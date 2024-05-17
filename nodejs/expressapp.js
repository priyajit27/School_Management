const express = require('express')
const app = express()
const port = 3000
app.use('/static',express.staic('static'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/rup', (req, res) => {
  res.status(200).send('Rup2!')
})
app.get('/home', (req, res) => {
  res.send('Hiii!')
})

app.listen(port, () => {
  console.log(`Example app listening at  http://localhost:${port}`)
})