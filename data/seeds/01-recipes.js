exports.seed = function(knex) {
  return knex("recipes").insert([
    {
      recipe_name: "Pepperoni Pizza"
    },
    {
      recipe_name: "Oatmeal"
    },
    {
      recipe_name: "Chicken Tacos"
    }
  ]);
};
