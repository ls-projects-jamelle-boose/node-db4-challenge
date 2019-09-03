exports.seed = function(knex) {
  return knex("ingredients").insert([
    {
      ingredient_name: "Water"
    },
    {
      ingredient_name: "Oats"
    },
    {
      ingredient_name: "Pepperoni roll"
    },
    {
      ingredient_name: "Chicken breast"
    }
  ]);
};
