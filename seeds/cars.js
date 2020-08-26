
exports.seed = async function(knex) {
  await knex("cars").truncate()


 await knex("cars").insert([
   { make: "Honda", model: "civic"},
   { make: "Hondas", model: "civic"},
   { make: "Hondaf", model: "civic"}
 ])
};
