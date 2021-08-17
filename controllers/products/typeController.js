const { Type } = require("../../models/productModels");

class TypeController {
  async createType(req, res) {
    try {
      let { name } = req.body;

      const type = await Type.create({ name });
      return res.json(type);
    } catch(e) {
      res.send(e)
    }
    
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

module.exports = new TypeController();
