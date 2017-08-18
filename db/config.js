const options = {
  connect: (client, dc, isFresh) => {
        const cp = client.connectionParameters;
        console.log(isFresh)
        console.log('Connected to database:', cp.database);
  },
  query: (e) => {
    console.log(e.query);
  },

};

const pgp = require('pg-promise')(options);
const os = require('os');
const databaseName = 'project_3_db';
const db = (() => {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {

    if(os.type() === 'Darwin'){
        return pgp({
          database: databaseName,
          port: 5432,
          host: 'localhost'
        });
    }
    return pgp({
      database: databaseName,
      port: 5432,
      host: 'localhost',
      user: 'postgres',
      password: ''
    });

  }
  else if (process.env.NODE_ENV === 'production') {
    return pgp(process.env.DATABASE_URL);
  }
  // console.log(`test: ${pgp(process.env.DATABASE_URL)}`);
  // return pgp(process.env.DATABASE_URL);
})();

// const db = pgp(process.env.DATABASE_URL);
module.exports = db;
