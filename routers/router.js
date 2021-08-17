const router = require('express')();

const {product, customer, brand, type, cart} = require('../routes')
const brandRouter = require('../routers/products/brandRouter')
const typeRouter = require('../routers/products/typeRouter')
const productRouter = require('../routers/products/productRouter')

router.use(brand, brandRouter)
router.use(type, typeRouter)
router.use(product, productRouter)

module.exports = router