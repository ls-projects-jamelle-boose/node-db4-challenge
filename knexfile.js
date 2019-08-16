module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/recipes.sqlite3'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    },
    pool: {
      afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done)
    },
    useNullAsDefault: true
  }
};
