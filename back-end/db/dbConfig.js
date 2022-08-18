// http://vitaly-t.github.io/pg-promise/module-pg-promise.html
const pgp = require("pg-promise")();
require("dotenv").config();

const { HEROKU_POSTGRESQL_COBALT_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER } =
  process.env;
// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object
const cn = HEROKU_POSTGRESQL_COBALT_URL
  ? {
      connectionString: HEROKU_POSTGRESQL_COBALT_URL,
      max: 30,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      host: PG_HOST,
      port: PG_PORT,
      database: PG_DATABASE,
      user: PG_USER,
    };

// alt from express docs
// var db = pgp('postgres://username:password@host:port/database')

const db = pgp(cn);

module.exports = db;
