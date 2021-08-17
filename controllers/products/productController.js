const { Product } = require("../../models/productModels");

class ProductController {
  async createProduct(req, res) {
    let { name, price, actionStatus, brandId, typeId } = req.body;

    const product = await Product.create({
      name,
      price,
      actionStatus,
      brandId,
      typeId,
    });
    return res.json(product);
  }

  async getOne(req, res) {
    let { id } = req.params;

    const product = await Product.findOne({ where: { id: id } });
    return res.json(product);
  }

  async getAll(req, res) {
    let { brandId, typeId } = req.query;

    if (!brandId & !typeId) {
      const products = await Product.findAll();
      return res.json(products);
    }
    if (brandId & typeId) {
      const products = await Product.findAll({ where: { brandId, typeId } });
      return res.json(products);
    }
    if (brandId & !typeId) {
      const products = await Product.findAll({ where: { brandId } });
      return res.json(products);
    }
    if (!brandId & typeId) {
      const products = await Product.findAll({ where: { typeId } });
      return res.json(products);
    }
  }
}

module.exports = new ProductController();
