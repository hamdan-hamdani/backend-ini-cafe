const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./src/routes/index')
const morgan = require('morgan')
const cors = require('cors')

// use module
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))
// parse application/json
app.use(bodyParser.json())
// use morga
app.use(morgan('dev'))
// use cors
app.use(cors())

// make router
app.use('/api/v1', router)
app.use('/uploads', express.static('./uploads'))
app.use((err, res) => {
  res.json({
    status: 404,
    message: 'URL Not Found'
  })
  console.log(err)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`)
})
