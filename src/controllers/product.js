const productModels = require('../models/product')
const helper = require('../helpers/helpers')
const redis = require('redis')
const client = redis.createClient(6379)

const product = {
  getProductById: (req, res) => {
    const id = req.params.id
    productModels.getProductById(id)
      .then((result) => {
        const resultProduct = result
        if (result.length === 0) {
          const message = {
            message: 'id not valid'
          }
          res.json(message)
        } else {
          helper.responseGetAll(res, resultProduct, 200)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  getAllProduct: (req, res) => {
    const search = req.query.search
    const sort = req.query.sort
    const order = req.query.order
    const idCategories = req.query.idCategories
    const page = req.query.page
    const limit = req.query.limit

    // if (false) {
    //   productModels.getPagination(page, limit)
    //     .then(result => {
    //       const resultProduct = result
    //       productModels.getAllProduct()
    //         .then(async (result) => {
    //           const resultLength = await result.length
    //           helper.responsePagination(res, resultProduct, 200, null, page, limit, resultLength)
    //         })
    //     })
    //     .catch(err => console.log(err))
    // } else if (idCategories) {
    //   productModels.getProductSortByIdCategory(idCategories)
    //     .then(result => {
    //       const resultProduct = result
    //       if (resultProduct.length !== 0) {
    //         helper.responseGetAll(res, resultProduct, 200)
    //       } else {
    //         const massage = {
    //           message: 'Data not found'
    //         }
    //         res.json(massage)
    //       }
    //     })
    //     .catch(err => console.log(err))
    // } else if (false) { // sort && order
    //   productModels.getProductSortByOrder(sort, order)
    //     .then(result => {
    //       const resultProduct = result
    //       if (resultProduct.length !== 0) {
    //         helper.responseGetAll(res, resultProduct, 200)
    //       } else {
    //         const massage = {
    //           message: 'Data not found'
    //         }
    //         res.json(massage)
    //       }
    //     })
    //     .catch((err) => {
    //       const massage = {
    //         message: `Column ${sort} not found`
    //       }
    //       res.json(massage)
    //       console.log(err)
    //     })
    // } else 
    if (sort) { // sort
      productModels.getProductSort(sort, order, page, limit)
        .then(result => {
          const resultProduct = result
          if (resultProduct.length !== 0) {
            helper.responseGetAll(res, resultProduct, 200)
          } else {
            const massage = {
              message: 'Data not found'
            }
            res.json(massage)
          }
        })
        .catch(err => {
          const massage = {
            massage: `Column ${sort} not found`
          }
          res.json(massage)
          console.log(err)
        })
    } else if (search) { // search
      productModels.getProductBySearch(search)
        .then((result) => {
          const resultProduct = result
          if (resultProduct.length !== 0) {
            helper.responseGetAll(res, resultProduct, 200)
          } else {
            const message = {
              message: 'Data not found'
            }
            res.json(message)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      productModels.getAllProduct(page, limit, sort, order, search)
        .then((result) => {
          const resultProduct = result
          const resultLength = result[0].totalData
          // console.log(result[0].totalData)
                return helper.responsePagination(res, resultProduct, 200, null, resultLength)
          // if (result.length > 0) {
            // if((sort && order) || search || (limit && page)){
            //   console.log('resultProduct brp '+ resultProduct[0].totalData)
            //   const resProduct = resultProduct
            //   console.log('ini resProduct ', resProduct)
            //   client.setex('getallproduct',60*60*12, JSON.stringify(resProduct))
            // }
        
            //     productModels.getSetex()
        //       .then(async (result) => {
        //         const resultProduct = await result
        //         client.setex('getallproduct', 60 * 60 * 12, JSON.stringify(resultProduct))
        //       })
        //     if (search) {
        //       const resultLength = result[0].totalDataSearch
        //       // console.log('totals data' + resultLength)
        //       return helper.responsePagination(res, resultProduct, 200, null, page, limit, resultLength)
        //     }
        //     const resultLength = result[0].totalData
        //     // console.log('totals data' + resultLength)
        //     helper.responsePagination(res, resultProduct, 200, null, page, limit, resultLength)
        //   } else {
        //     const resultLength = null
        //     const message = { message: 'Data not found' }
        //     helper.responsePagination(res, message, 200, null, page, limit, resultLength)
        //   }
        // })
        // .catch((err) => {
        //   console.log(err)
        })
    }
  },
  updateProduct: (req, res) => {
    const id = req.params.id
    console.log('ini update')
    console.log(req.file)
    console.log(req.body)
    const {
      idCategory,
      nameProduct,
      price,
      qty
    } = req.body
    const data = {
      idCategory,
      nameProduct,
      price,
      image: `${process.env.INSERT_PRODUCT}${req.file.filename}`,
      qty,
      updatedAt: new Date()
    }
    productModels.updateProduct(id, data)
      .then(() => {
        // const resultProduct = result.affectedRows
        helper.responseGetAll(res, data, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  deleteProduct: (req, res) => {
    const id = req.params.id
    productModels.deleteProduct(id)
      .then(() => {
        const resultProduct = {
          message: 'Delete Data success '
        }
        helper.responseGetAll(res, resultProduct, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  insertProduct: (req, res) => {
    console.log('insert product req file')
    console.log(req.file)    
    const {
      nameProduct,
      price,
      qty,
      idCategory
    } = req.body
    const data = {
      idCategory,
      nameProduct,
      price,
      image: `${process.env.INSERT_PRODUCT}${req.file.filename}`,
      qty
    }
    productModels.insertProduct(data)
      .then(() => {
        // const resultProduct = result.affectedRows
        helper.responseGetAll(res, data, 200)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = product
