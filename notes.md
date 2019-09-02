**Tables**

1. Recipes
1. Ingredients

**Relationships**

1. One-to-Many

   - Recipe <==> Ingredients

1. Many-to-Many
   - Ingredients <==> Recipes

**Table Details**

1. Recipe

   - id
   - recipe_name

1. Ingredients

   - id
   - ingredient_name
   - recipe_id [*Figure out the many, that's where the foreign key goes*]

1. Zoos

   - id
   - zoo_name
   - address

1. Zoo_animals
   - zoo_id
   - animal_id
