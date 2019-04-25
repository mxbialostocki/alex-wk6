
exports.up = (knex, Promise) => {
  return knex.schema.createTable('oracles', (table) => {
    table.integer('id').primary()
    table.string('card_name')
    table.string('image_url')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('oracles')
};
