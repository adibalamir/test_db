
exports.up = function(knex, Promise) {
  console.log('this is fantastic')
  return Promise.resolve()
};

exports.down = function(knex, Promise) {
  return Promise.resolve()
};
