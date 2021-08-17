const router = require('express')();

const brandController = require("../../controllers/products/brandController");

router.post("/", brandController.createBrand);
router.get("/", brandController.getAll);

module.exports = router;
