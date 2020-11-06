const express = require('express')
const router = express.Router()
const product = require('./product')
const category = require('./category')
const history = require('./history')
const user = require('./user')

router
  .use('/products', product)
  .use('/categories', category)
  .use('/histories', history)
  .use('/users', user)

module.exports = router
