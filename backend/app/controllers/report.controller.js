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
// ** get guardian student view **
// get by guardianID
exports.guardian_student_view = (req, res) => {
  const id = req.params.id;
  const guardian_student_view = db.sequelize.query(`SELECT * FROM guardian_student_view WHERE GuardianID = ${id}`, { type: QueryTypes.SELECT })
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

  //// get by StudentID
  exports.guardian_student_view_byStudentID = (req, res) => {
    const id = req.params.id;
    const guardian_student_view = db.sequelize.query(`SELECT * FROM guardian_student_view WHERE StudentID = ${id}`, { type: QueryTypes.SELECT })
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
  

// all rows in guat=rian student view
exports.guardian_student_view_all = (req, res) => {
  const guardian_student_view = db.sequelize.query(`SELECT * FROM guardian_student_view`, { type: QueryTypes.SELECT })
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
/// methods to retrieve course_view (it includes the status name)
// first by id
exports.course_view_byId = (req, res) => {
  const id = req.params.id;
  const view = db.sequelize.query(`SELECT * FROM course_view WHERE CourseID = ${id}`, { type: QueryTypes.SELECT })
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
// and all rows
exports.course_view_all = (req, res) => {
  const view = db.sequelize.query(`SELECT * FROM course_view`, { type: QueryTypes.SELECT })
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

/// methods to retrieve faculty_class_list (it includes the status name)
// first by id
exports.faculty_class_list_byFacultyId = (req, res) => {
  const id = req.params.id;
  const view = db.sequelize.query(`SELECT * FROM faculty_class_list WHERE FacultyID = ${id}`, { type: QueryTypes.SELECT })
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
// and all rows
exports.faculty_class_list_all = (req, res) => {
  const view = db.sequelize.query(`SELECT * FROM faculty_class_list`, { type: QueryTypes.SELECT })
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