const db = require('../database/index');
const recipes = db('recipes');

module.exports = {
  getRecipes: () => {
    return recipes;
  },
  getShoppingList: (recipe_id = '') => {
    return recipes
      .select(
        'recipes.id',
        'recipes.name',
        'ingredients.name',
        'ingredients.quantity'
      )
      .from('recipes')
      .join('recipe_ingredients', 'recipe_ingredients.recipe_id', 'recipes.id')
      .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
      .where('recipes.id', recipe_id);
  },
  findInstructions: (recipe_id = '') => {
    return recipes
      .select(
        'recipes.id',
        'recipes.name',
        'recipe_instructions.step',
        'recipe_instructions.instruction'
      )
      .from('recipes')
      .join(
        'recipe_instructions',
        'recipe_instructions.recipe_id',
        'recipes.id'
      )
      .where('recipe_instructions.recipe_id', recipe_id)
      .orderBy('recipe_instructions.step', 'asc');
  },
};
