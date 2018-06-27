
exports.up = function(knex, Promise) {
  return knex.schema.table('milestones', function(table) {
    table.bigInteger('famous_people_Id').unsigned().notNullable().references('id').inTable('famous_people').index();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('milestones', function(table) {
    table.dropColumn('famous_people_Id')
  })
};
