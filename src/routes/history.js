const express = require('express')
const historyController = require('../controllers/history')
const router = express.Router()

router
  .get('/:id', historyController.getHistoryById)
  .get('', historyController.getHistoryByAll)
  .post('', historyController.getHistoryInsert)
  .patch('/:id', historyController.getHistoryUpdate)
  .delete('/:id', historyController.getHistoryDelete)

module.exports = router
