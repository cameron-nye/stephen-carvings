require('dotenv').config()
const bodyParser = require('body-parser')
    , express = require('express')
    , session = require('express-session')
    , massive = require('massive')

const {
  SERVER_PORT
} = process.env


const app = express()
app.use(bodyParser.json())



app.listen(SERVER_PORT, console.log(`🐦  The birds are singing on port ${SERVER_PORT} 🐦`))