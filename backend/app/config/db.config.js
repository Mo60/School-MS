module.exports = {
    HOST: "localhost",
    PORT: "1434",
    USER: "APPUSER",
    PASSWORD: "Cis43750000",
    DB: "bezkoder_db",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };