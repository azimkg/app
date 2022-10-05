const ApiError = require("../error/apiErorr");
const { Item } = require("../Models/models");

class ItemController {
  async create(req, res, next) {
    try {
      const { name, distance, query } = req.body;
      const item = await Item.create({ name, distance, query });
      return res.json(item);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const items = await Item.findAll();
    return res.json(items);
  }
}

module.exports = new ItemController();
