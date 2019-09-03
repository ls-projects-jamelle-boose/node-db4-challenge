exports.seed = function(knex) {
  return knex("instructions").insert([
    {
      recipe_id: 1,
      step_no: 1,
      instructions: "Chop up pepperoni."
    },
    {
      recipe_id: 1,
      step_no: 2,
      instructions: "Add pepperoni to pizza."
    },
    {
      recipe_id: 1,
      step_no: 3,
      instructions: "Bake pizza and enjoy!"
    },
    {
      recipe_id: 2,
      step_no: 1,
      instructions: "Add oats to water after boiling."
    },
    {
      recipe_id: 2,
      step_no: 2,
      instructions: "Cook for 10 mins then enjoy!"
    },
    {
      recipe_id: 3,
      step_no: 1,
      instructions: "Chop up chicken"
    },
    {
      recipe_id: 3,
      step_no: 2,
      instructions: "Add chicken to taco shell"
    },
    {
      recipe_id: 3,
      step_no: 3,
      instructions: "Add cheese then enjoy!"
    }
  ]);
};
