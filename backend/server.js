const express = require("express");
const cors = require("cors");
const { QueryTypes } = require('sequelize');
var mssql = require('mssql');
const fs = require('fs');
// to get the example
///https://www.bezkoder.com/node-js-sql-server-crud/
//
//
const app = express();
const dbConfig = require("./app/config/db.config");
const { TIMEOUT } = require("dns");


async function connectToDb() {
  // create database if not exist
  // https://www.w3schools.com/nodejs/nodejs_mysql_create_db.asp
  var con = await mssql.connect({
    server: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    trustServerCertificate: true
  });
  await con.connect(function(err) {
    if (err) console.log(err);
    else
    console.log("Connected!");
    con.query(`CREATE DATABASE  ${dbConfig.DB}` , function (err, result) {
      if (err) console.log(`ror: Database ${dbConfig.DB} may already exist`);
      else
      console.log("Database created");
    });
  });
  // https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
  const delay = ms => new Promise(res => setTimeout(res, ms));
  console.log("Waited 3s for before reconnecting to database");
  await delay(5000);

  // this will create the tables if they don't exist if force true it will delete any data in tables
  const db = require("./app/models");
  await db.sequelize.sync(
            //  {force: true}
                );
 // create the views
 // load the sql query from the file
 const dataSql = fs.readFileSync('./SQLQuery to create the views.sql').toString();
 var arr = dataSql.split("--");
 for ( i = 0 ; i< arr.length ; i++){
    try{
    const [results, metadata] = await db.sequelize.query(arr[i]);
    console.log('view created')
    }
    catch(err){
      console.log('view not created, may already exist');
    }
}
// Results will be an empty array and metadata will contain the number of affected rows.
}
connectToDb();
//In development, you may need to drop existing tables
//and re-sync database. Just use force: true as following code:

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });


app.use(cors({
    origin: '*'
}));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/turorial.routes")(app);
require("./app/routes/enrollment.routes")(app);
require("./app/routes/parent.routes")(app);
require("./app/routes/student.routes")(app);
require("./app/routes/class.routes")(app);
require("./app/routes/invoice.routes")(app);
require("./app/routes/payment.routes")(app);
require("./app/routes/teacher.routes")(app);
require("./app/routes/user.routes")(app);
// 
require("./app/routes/report.routes")(app);
require("./app/routes/guardian.routes")(app);
require("./app/routes/guardian_student.routes")(app);
require("./app/routes/guardianRelationship.routes")(app);
//
require("./app/routes/class_room.routes")(app);
require("./app/routes/classStatus.routes")(app);
require("./app/routes/course.routes")(app);
require("./app/routes/courseStatus.routes")(app);
require("./app/routes/day.routes")(app);
require("./app/routes/faculty_class.routes")(app);
require("./app/routes/faculty.routes")(app);
require("./app/routes/facultyStatus.routes")(app);
require("./app/routes/guardianStatus.routes")(app);
require("./app/routes/location.routes")(app);
require("./app/routes/locationStatus.routes")(app);
require("./app/routes/medical.routes")(app);
require("./app/routes/room.routes")(app);
require("./app/routes/roomStatus.routes")(app);
require("./app/routes/semester.routes")(app);
require("./app/routes/student_class.routes")(app);
require("./app/routes/student_classStatus.routes")(app);
require("./app/routes/student_medical.routes")(app);
require("./app/routes/studentStatus.routes")(app);
require("./app/routes/teacher.routes")(app);
require("./app/routes/timeblock.routes")(app);
require("./app/routes/student_medical.routes")(app);
require("./app/routes/student_medicalStatus.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
