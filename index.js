import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Welcpome to Tiffin Service')
})

app.get('/tiffins', (req, res) => {
    res.send('list of Tiffins')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})