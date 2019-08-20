exports.seed = kn => {
  return kn("recipes")
    .truncate()
    .then(() => {
      return kn("recipes").insert([
        {
          name: "Oreo Brownies",
          description:
            "Fudgy brownies with big chunks of Oreo cookies. Hot damn."
        },
        {
          name: "Rachet Eggs",
          description: "Scrambled with a side of thot."
        }
      ]);
    });
};
