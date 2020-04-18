const ingredients = require('../models/ingredients');

module.exports = {
  findAll: async (req, res, next) => {
    try {
      res.status(200).json(`working`);
    } catch (error) {
      res.status(500).json(`not implemented`);
    }
  },
  findById: async (req, res, next) => {
    try {
      res.status(200).json(`working`);
    } catch (error) {
      res.status(500).json(`not implemented`);
    }
  },
  findIngredientInAllRecipes: async (req, res, next) => {
    try {
      res.status(200).json(`working`);
    } catch (error) {
      res.status(500).json(`not implemented`);
    }
  },
};
