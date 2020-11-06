const categoryModels = require('../models/category')
const helper = require('../helpers/helpers')

const category = {
  getCategoryById: (req, res) => {
    const id = req.params.id
    categoryModels.getCategoryById(id)
      .then((result) => {
        const resultCategory = result
        if (resultCategory.length === 0) {
          const message = {
            message: 'id not valid'
          }
          res.json(message)
        } else {
          helper.responseGetAll(res, resultCategory, 200)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getAllCategory: (req, res) => {
    categoryModels.getAllCategory()
      .then((result) => {
        const resultCategory = result
        helper.responseGetAll(res, resultCategory, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateCategory: (req, res) => {
    const id = req.params.id
    const {
      nameCategory
    } = req.body
    const data = {
      nameCategory
    }
    categoryModels.updateCategory(id, data)
      .then((result) => {
        const resultCategory = result.affectedRows
        helper.responseGetAll(res, resultCategory, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteCategory: (req, res) => {
    const id = req.params.id
    categoryModels.deleteCategory(id)
      .then((result) => {
        const resultCategory = result.affectedRows
        helper.responseGetAll(res, resultCategory, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertCategory: (req, res) => {
    const {
      nameCategory
    } = req.body
    const data = {
      nameCategory
    }
    categoryModels.insertCategory(data)
      .then((result) => {
        const resultCategory = result.affectedRows
        helper.responseGetAll(res, resultCategory, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = category
