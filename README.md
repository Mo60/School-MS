# Art-Class-Program
Code (Front End and Back End) built for client to interact with the database per requirements and needs.

------
# to start
1) start the backend
  - cd backend
  - npm install
  - npm run start
  >> requirements
  - SQL server instance ( can use docker)
  - db.config file in app/config

    you can create it using 

    cat >>  backend/app/config/db.config.js
    module.exports = {
    HOST: "localhost",
    PORT: "1434",
    USER: "sa",
    PASSWORD: "strong_password",
    DB: "schoolAppDB1",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

  // then press enter
  // if the database does not exist the app will create one
  


2) start the frontend


------



