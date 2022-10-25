/*  In order to establish connection to the database you need to have the information in this readme as a file named "db.config.js" on your local machine. This file is ignored in .gitignore for 
security reasons. USER and PASSWORD need to be added here before you can NPM start or else it'll never connect to the database.

If you are not sure about how to do this please ask - JRM

*/

module.exports = {
    HOST: "localhost",
    PORT: "1434",
    USER: "",
    PASSWORD: "",
    DB: "CIS4375Project",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

