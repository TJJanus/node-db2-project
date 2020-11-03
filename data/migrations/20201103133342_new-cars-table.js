
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id')
      tbl.text('VIN').notNull()
      tbl.text('Make').notNull()
      tbl.text('Model').notNull()
      tbl.integer('mileage').notNull()
      tbl.text('Transmission')
      tbl.text('Status')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
