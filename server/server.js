require('dotenv').config()
const bodyParser = require('body-parser')
    , express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , nodemailer = require('nodemailer')

const {
  SERVER_PORT,
  EMAIL,
  EMAIL_PASSWORD
} = process.env


const app = express()
app.use(bodyParser.json())

// NODEMAILER
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD
  }
})

app.post('/email', (req, res, next) => {
  const {name, location, email, subject, message} = req.body
  let mail = {
    from: EMAIL,
    to: EMAIL,
    html: `Sender: ${name} from ${location} <br/> Sender's Email: ${email} <br/> Subject: ${subject} <br/> Message: ${message}` 
  }
  transporter.sendMail(mail, (error, response) => {
    if(error){
      console.log('Error sending email')
      console.log(error)
    }
    else {
      console.log('Email sent successfully!')
    }
    transporter.close()
  })
  res.sendStatus(201)
})



app.listen(SERVER_PORT, console.log(`🐦  The birds are singing on port ${SERVER_PORT} 🐦`))