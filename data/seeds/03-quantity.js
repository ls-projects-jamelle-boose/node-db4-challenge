exports.seed = function(knex) {
  return knex("quantity").insert([
    {
      recipe_id: 1,
      ingredient_id: 3,
      quantity: 5
    },
    {
      recipe_id: 2,
      ingredient_id: 2,
      quantity: 50.3
    },
    {
      recipe_id: 3,
      ingredient_id: 4,
      quantity: 15.77
    }
  ]);
};
