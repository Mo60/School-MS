make a local file on your machine here called db.config.js
witht the connection  information 

module.exports = {
    HOST: "localhost",
    PORT: "1434",
    USER: "",
    PASSWORD: "",
    DB: "bezkoder_db",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };