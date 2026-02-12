require('dotenv').config()
const express = require('express')
//import express from 'express'
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tiffins', (req, res) => {
    res.send('list of Tiffins')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})