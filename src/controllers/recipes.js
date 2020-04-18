const recipes = require('../models/recipes');

module.exports = {
  findAll: async (req, res, next) => {
    try {
      const getRecipes = await recipes.getRecipes();
      if (!getRecipes) {
        res.status(404).json(`No recipes found`);
      } else {
        res.status(200).json({ getRecipes });
      }
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

  getShoppingList: async (req, res, next) => {
    const { id } = req.params;
    try {
      const getShoppingList = await recipes.getShoppingList(id);
      res.status(200).json({ getShoppingList });
    } catch (error) {
      res.status(500).json(`not implemented`);
    }
  },
  findInstructions: async (req, res, next) => {
    const { id } = req.params;
    try {
      const findInstructions = await recipes.findInstructions(id);
      res.status(200).json({ findInstructions });
    } catch (error) {
      res.status(500).json(`not implemented`);
    }
  },
};
