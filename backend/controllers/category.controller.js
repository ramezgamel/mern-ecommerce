const Category = require("../models/category.model");
const factoryHandlers = require("./factoryHandlers");

exports.createOne = factoryHandlers.createOne(Category);
exports.getAll = factoryHandlers.getAll(Category);
exports.updateOne = factoryHandlers.updateOne(Category);
exports.getOne = factoryHandlers.getOne(Category);
exports.deleteOne = factoryHandlers.deleteOne(Category);
