exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments().notNullable();
      tbl
        .string("recipe_name", 100)
        .notNullable()
        .unique();
    })
    .createTable("ingredients", tbl => {
      tbl.increments().notNullable();
      tbl.string("ingredient_name", 100).notNullable();
    })
    .createTable("quantity", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.primary(["recipe_id", "ingredient_id"]);
      tbl.float("quantity").notNullable();
    })
    .createTable("instructions", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.integer("step_no").notNullable();
      tbl.primary(["recipe_id", "step_no"]);
      tbl.string("instructions", 255).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("quantity")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
