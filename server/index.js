require('dotenv').config({path: __dirname + '/../.env'})
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)

    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port ${SERVER_PORT}`)
    })
    
})

app.get('/api/houses', ctrl.getHouses)
app.post('api/house', ctrl.addHouse)


