import express from "express";
// const express = require('express')
// npm i --save-dev @types/express  => Se debe instalar para poder usar TypeScript en express

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})