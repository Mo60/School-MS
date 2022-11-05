const { QueryTypes } = require('sequelize');
const db = require("../models");



// Retrieve all rows in the view view_student from the database.
// here I ran an sql query that select all rows in the the view
// onother option is to run sql query that returns the same results

// when adding a new methods make sure you update routing in report.routes.js
// and in server.js 
exports.view_students = (req, res) => {

  const view_students = db.sequelize.query("SELECT * FROM view_student", { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};
//due_balance
exports.due_balance = (req, res) => {

  const due_balance = db.sequelize.query("SELECT * FROM due_balance", { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};

exports.student_status = (req, res) => {

  const view_students = db.sequelize.query("SELECT * FROM student_status", { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};

exports.guardian_student_view = (req, res) => {

  const guardian_student_view = db.sequelize.query("SELECT * FROM guardian_student_view", { type: QueryTypes.SELECT })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving info."
    });
  });
  
};

