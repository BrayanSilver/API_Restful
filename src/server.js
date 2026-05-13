const express = require('express')
const mongoose = require('mongoose')
const app = express()

const routes = require('./routes/routes')
const db = require('./database/db')

// HABILITA O SERVER PARA RECEBER DADOS VIA POST

app.use(express.json())

app.use('/api', routes)



db.connect()


const port = process.env.port || 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
