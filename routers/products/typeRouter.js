const router = require('express')();

const typeController = require('../../controllers/products/typeController')

router.post('/', typeController.createType)
router.get('/', typeController.getAll)

module.exports = router;