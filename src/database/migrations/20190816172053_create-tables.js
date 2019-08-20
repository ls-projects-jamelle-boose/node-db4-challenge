exports.up = kn =>
  kn.schema
    .createTable("recipes", tb => {
      tb.increments();

      tb.string("name")
        .notNullable()
        .unique();

      tb.string("description");
    })
    .createTable("ingredients", tb => {
      tb.increments();

      tb.string("name").notNullable();

      tb.float("quantity").notNullable();

      tb.string("unit").notNullable();
    })
    .createTable("recipe_instructions", tb => {
      tb.increments();

      tb.integer("step")
        .unsigned()
        .notNullable();

      tb.string("instruction").notNullable();

      tb.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("recipe_ingredients", tb => {
      tb.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tb.integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredients.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tb.primary(["recipe_id", "ingredient_id"]);
    });

exports.down = kn => {
  return kn.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("recipe_instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
