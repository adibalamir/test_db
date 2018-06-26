const getName = process.argv;
const settings = require("./settings");

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});
console.log(new Date())
function addPerson() {
  knex('famous_people').insert({first_name: getName[2], last_name: getName[3], birthdate: getName[4]}).asCallback(function (err, cb) {
    if (err) return console.error(err);
  })
}
addPerson();