const express = require('express')
const path = require('path')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config()

let initialPath = path.join(__dirname, 'public')
let app = express()

app.use(express.static(initialPath))
app.use(express.json())

app.get('/', (req, res) => {res.sendFile(path.join(initialPath, 'index.html'))})
app.post('mail', (req, res) => {
  const { firstname, lastname, email, msg } = req.body

  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })

  const mailOptions = {
    from: 'sender email',
    to: 'receiver email',
    subject: 'Postfolio',
    text: `First name: ${firstname}, \nLast name: ${lastname}, \nEmail: ${email}, \nMessage: ${msg}`
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err)
      res.json('Something wrong!!! Please, try again.')
    } else {
      res.json('Thanks for e-mailling me. I will reply to you within soon!!!')
    }
  })
})

app.listen(3000, () => {console.log('listen door 3000 at ' + new Date())})