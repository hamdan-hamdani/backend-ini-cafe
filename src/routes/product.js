const express = require('express')
const productController = require('../controllers/product')
const router = express.Router()
const { upload, verifyAccess, chacheGetAllProduct, clearCache } = require('../middlewares/middlewares')

router
  .get('/:id', verifyAccess, productController.getProductById)
  .get('/',verifyAccess, productController.getAllProduct)
  // .post('/', verifyAccess, clearCache, upload.single('image'), productController.insertProduct)
  .post('/', verifyAccess, clearCache, upload.single('file'), productController.insertProduct)
  .patch('/:id', verifyAccess, upload.single('file'), productController.updateProduct)
  // .patch('/:id', verifyAccess, upload.single('image'), productController.updateProduct)
  // .patch('/:id', verifyAccess, upload.single('file'), (req,res) => {
  //   res.json({file: req.file})
  // })
  .delete('/:id', verifyAccess, productController.deleteProduct)
  // chacheGetAllProduct
module.exports = router
