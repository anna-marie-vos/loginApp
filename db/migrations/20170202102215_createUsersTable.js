
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name');
    table.string('email');
    table.string('password');
    table.boolean('isAdmin').defaultTo(false).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
