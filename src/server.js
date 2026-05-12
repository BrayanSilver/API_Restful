const express = require('express')
const mongoose = require('mongoose')
const app = express()

const routes = require('./routes/routes')

// HABILITA O SERVER PARA RECEBER DADOS VIA POST

app.use(express.urlencoded({extended: true}))

app.use('/api', routes)


const port = process.env.port || 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
