const express = require('express');
const ingredients = require('../controllers/ingredients');
const router = express.Router();

router.get('/', ingredients.findAll);
router.get('/:id', ingredients.findById);
router.get('/:id/recipes', ingredients.findIngredientInAllRecipes);

module.exports = router;
