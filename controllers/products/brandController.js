const { Brand } = require("../../models/productModels");

class BrandController {
  async createBrand(req, res) {
    let { name } = req.body;

    const brand = await Brand.create({ name });
    return res.json(brand);
  }

  async getAll(req, res) {
    const brands = await Brand.findAll();
    return res.json(brands);
  }
}

module.exports = new BrandController();
