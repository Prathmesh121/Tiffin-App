require('dotenv').config()
const express = require('express')
//import express from 'express'
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tiffins', (req, res) => {
    res.send('list of Tiffins')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})