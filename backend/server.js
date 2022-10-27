const express = require("express");
const cors = require("cors");

// to get the example
///https://www.bezkoder.com/node-js-sql-server-crud/
//
//
const app = express();

const db = require("./app/models");
db.sequelize.sync();

//In development, you may need to drop existing tables
//and re-sync database. Just use force: true as following code:

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

var corsOptions = {
  origin: "http://localhost:8083"
};

app.use(cors(corsOptions));

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


// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
