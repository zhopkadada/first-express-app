const router = require('express')();

const productController = require('../../controllers/products/productController');

router.post('/', productController.createProduct)
router.get('/', productController.getAll)
router.get('/:id', productController.getOne)

module.exports = router