
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table)=>{
      table.increments("id");
      table.text("make").notNull().unique()
      table.text("model").notNull()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableifExists("cars")
};
