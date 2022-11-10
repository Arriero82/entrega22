const option = {
  mysql: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "entrega16",
    },
  },
  sqlite: {
    client: "sqlite3",
    connection: {
      filename: "./db/mydb.sqlite",
    },
    useNullAsDefault: true,
  },
};

module.exports = { option };
