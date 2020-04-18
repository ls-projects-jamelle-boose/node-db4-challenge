const express = require('express');
const recipes = require('../controllers/recipes.js');
const router = express.Router();

router.get('/', recipes.findAll);
router.get('/:id', recipes.findById);
router.get('/:id/shoppinglist', recipes.getShoppingList);
router.get('/:id/instructions', recipes.findInstructions);

module.exports = router;
