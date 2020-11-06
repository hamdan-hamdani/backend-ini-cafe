const historyModel = require('../models/history')
const helper = require('../helpers/helpers')
const history = {
  getHistoryById: (req, res) => {
    const id = req.params.id
    historyModel.getHistoryById(id)
      .then(result => {
        const historyResult = result
        helper.responseGetAll(res, historyResult, 200)
      })
      .catch(err => console.log(err))
  },
  getHistoryByAll: (req, res) => {
    const mo = req.query.mo
    historyModel.getHistoryByAll(mo)
      .then(result => {
        const historyResult = result
        helper.responseGetAll(res, historyResult, 200)
      })
      .catch(err => console.log(err))
  },
  getHistoryInsert: (req, res) => {
    const {
      invoice,
      cashier,
      amount
    } = req.body
    const data = {
      invoice,
      cashier,
      date: new Date(),
      amount
    }
    historyModel.getHistoryInsert(data)
      .then(result => {
        const historyResult = result.affectedRows
        helper.responseGetAll(res, historyResult, 200)
      })
      .catch(err => console.log(err))
  },
  getHistoryUpdate: (req, res) => {
    const id = req.params.id
    const {
      invoice,
      cashier,
      amount
    } = req.body
    const data = {
      invoice,
      cashier,
      date: new Date(),
      amount
    }
    historyModel.getHistoryUpdate(data, id)
      .then(result => {
        const historyResult = result.affectedRows
        helper.responseGetAll(res, historyResult, 200)
      })
      .catch(err => console.log(err))
  },
  getHistoryDelete: (req, res) => {
    const id = req.params.id
    historyModel.getHistoryDelete(id)
      .then(result => {
        const historyResult = result.affectedRows
        helper.responseGetAll(res, historyResult, 200)
      })
      .catch(err => console.log(err))
  }
}

module.exports = history
