exports.seed = kn => {
  return kn('ingredients')
          .truncate()
          .then(() => {
            return kn('ingredients')
                    .insert([
                      { name: 'salted butter', quantity: 4, unit: 'sticks' },
                      { name: 'semi-sweet chocolate', quantity: 16, unit: 'ounces' },
                      { name: 'instant espresso powder', quantity: 2, unit: 'tablespoons' },
                      { name: 'large eggs', quantity: 7, unit: 'none' },
                      { name: 'vanilla extract', quantity: 2, unit: 'tablespoons' },
                      { name: 'granulated white sugar', quantity: 2.25, unit: 'cups' },
                      { name: 'all purpose flour', quantity: 1.25, unit: 'cups' },
                      { name: 'baking powder', quantity: 1, unit: 'tablespoon' },
                      { name: 'salt', quantity: 1, unit: 'teaspoon' },
                      { name: 'broken oreos', quantity: 4, unit: 'cups' },
                      { name: 'Pidgeon eggs', quantity: 7.75, unit: 'none' },
                      { name: 'thots', quantity: 2.5, unit: 'none' }
                    ]);
          });
};