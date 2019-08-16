exports.seed = kn => {
  return kn('recipe_instructions')
          .truncate()
          .then(() => {
            return kn('recipe_instructions')
                    .insert([
                      { step: 1, instruction: 'Reheat oven to 350F. Butter and flour 13x18x1-inch sheet pan. Line with foil or parchment that hangs over the sides for ease in getting them out (butter the foil/parchment).', recipe_id: 1 },
                      { step: 2, instruction: 'In a heatproof, medium-bowl set over a saucepan of simmering water, heat butter, and chocolates until melted and smooth; cool slightly.', recipe_id: 1 },
                      { step: 3, instruction: 'In a large bowl, whisk together the eggs, espresso powder, vanilla and sugar. Stir the egg mixture into the slightly cooled chocolate mixture. Cool to room temperature.', recipe_id: 1 },
                      { step: 4, instruction: 'In a medium bowl, whisk together the flour, baking powder, and salt, then add to batter. Stir most of the broken cookies into the chocolate mixture (save a few for sprinkling on top). Then pour the brownie batter into the prepared baking pan and smooth the top with a rubber spatula. Sprinkle any reserved brownie pieces on top.', recipe_id: 1 },
                      { step: 5, instruction: 'Bake for 25 to 35 minutes, or until toothpick inserted in center comes out clean with a few crumbs attached; do not overbake as you want them to be fudgy! Let cool completely, then cover tightly and chill for several hours or overnight. Chilled brownies are easier to cut. Invert the chilled brownie pan onto a large cutting board, peel off the foil or parchment and cut into squares.', recipe_id: 1 },
                      { step: 1, instruction: 'Hell no.', recipe_id: 2 }
                    ]);
          });
};