const getName = process.argv[2];
const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

function searchName() {
  client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
    const queryString = `SELECT * FROM famous_people WHERE first_name = '${getName}' OR last_name = '${getName}'`
    client.query(queryString, (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      format(result);
      client.end();
    });
  });
}
function format(cb) {
  console.log("Searching...")
  console.log(`Found ${cb.rows.length} person(s) by the name '${getName}':`)
  let id = 0
  for (let i = 0; i < cb.rows.length; i++) {
    id += 1
    console.log("- " + id + ": " + cb.rows[i].first_name + " " + cb.rows[i].last_name + " born " + cb.rows[i].birthdate)
  }
}
searchName();