# Art-Class-Program
Code (Front End and Back End) built for client to interact with the database per requirements and needs.

------
# to start
1) start the backend
  - cd backend
  - npm install
  - npm run start
  >> requrmentS
  - SQL server instance ( can use docker)
  - db.config file in app/config
    your can create it using 

    cat >>  backend/app/config/db.config.js
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

  // then press enter

  


2) start the frontend


------



